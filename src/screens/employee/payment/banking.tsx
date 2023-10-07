import {StackActions} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {DeviceEventEmitter, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import {PhotoFile} from 'react-native-vision-camera';

import {useBack} from '~core/hooks';

import {Button, Icon, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {showErrorMessage, showSuccessMessage} from '~core/utils';
import {useUploadImage} from '~modules/image';
import {useUpdateOrder} from '~modules/order';
import {getVietQRUri} from '~modules/payment';
import {EvenListenterName} from '~modules/types';
import {EmployeeScreenProps} from '~navigators/employee';

const Banking = ({
  navigation,
  route,
}: EmployeeScreenProps<'/employee/payment/banking'>) => {
  const {params} = route;
  const {orderId, total, required = false} = params;

  const {t} = useTranslation();

  const [image, setImage] = useState<PhotoFile>();

  const {isLoading, updateOrder} = useUpdateOrder();
  const {isLoading: uploadImgLoading, upload, percent} = useUploadImage();
  const notFinished = useRef(true);

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener(
      EvenListenterName.setBankingImage,
      (photo: PhotoFile) => setImage(photo),
    );

    return () => listener.remove();
  }, []);

  const renderQRCode = () => (
    <FastImage
      source={{
        uri: getVietQRUri(total, orderId),
      }}
      style={{
        maxWidth: '100%',
        height: 400,
        marginTop: 16,
      }}
      resizeMode="contain"
    />
  );

  const androidImagePath = `file://${image?.path}`;

  const renderImage = () => (
    <FastImage
      source={{
        uri: androidImagePath,
      }}
      style={{
        maxWidth: '100%',
        height: 400,
        marginTop: 16,
      }}
      resizeMode="contain"
    />
  );

  const onConfirm = async () => {
    try {
      if (!image?.path) {
        showErrorMessage(t('message.paymentImageRequired'));
        return;
      }
      const storagePath =
        Config.ENV === 'test'
          ? `testing_banking/${orderId}`
          : `banking/${orderId}`;
      const imageUrl = await upload({
        path: androidImagePath,
        name: storagePath,
      });
      await updateOrder({
        id: orderId,
        updateInfo: {
          imageUrl,
          status: 'PROCESSING',
        },
      });
      notFinished.current = false;
      showSuccessMessage(t('message.orderPaymentSuccess'));
      DeviceEventEmitter.emit(EvenListenterName.reloadEmployeeHome);
      const popAction = StackActions.popToTop();
      navigation.dispatch(popAction);
      navigation.navigate('/employee/order-history');
    } catch (error) {
      console.log('error', error);
      showErrorMessage(t('error.generalTitle'));
    }
  };

  const deletePayment = useCallback(async () => {
    await updateOrder({
      id: orderId,
      updateInfo: {
        status: 'DELETED',
      },
    });
    notFinished.current = false;
    showSuccessMessage(t('message.backToPaymentMethod'));
    navigation.goBack();
  }, [orderId, navigation, updateOrder, t]);

  useBack({
    enabled: required,
    stateRef: notFinished,
    title: t('action.goBack'),
    description: t('message.paymentBeforeGoBack'),
    cancelText: t('action.cancel'),
    okText: t('action.goBack'),
    onPress: deletePayment,
  });

  return (
    <Screen topInset px={4}>
      <View flexDirection="row" alignItems="center">
        <NavButton />
        <Text fontWeight="700" fontSize={18}>
          {t('common.bankTitle')}
        </Text>
      </View>

      {image ? renderImage() : renderQRCode()}

      <View my={4}>
        <Text mb={4}>
          {image?.path
            ? t('common.updatePaymentImage')
            : t('common.addPaymentImage')}
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/common/camera-capture', {
              returnPath: '/employee/payment/banking',
              returnParams: params,
              callbackEvent: EvenListenterName.setBankingImage,
            })
          }>
          <View
            width={64}
            height={64}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor="primary100">
            <Icon name="Add" />
          </View>
        </TouchableOpacity>
      </View>

      <View flex={1} />

      <Button
        title={
          uploadImgLoading && percent !== undefined
            ? `${(percent * 100).toFixed(2)}%`
            : t('action.confirmOrder')
        }
        onPress={onConfirm}
        disabled={uploadImgLoading}
        isLoading={isLoading}
      />
    </Screen>
  );
};

export default Banking;
