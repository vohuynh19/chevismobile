import storage from '@react-native-firebase/storage';
import {StackActions} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {DeviceEventEmitter, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PhotoFile} from 'react-native-vision-camera';
import {images} from '~assets';
import {useBack} from '~core/hooks';

import {Button, Icon, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {showErrorMessage, showSuccessMessage} from '~core/utils';
import {useUploadImage} from '~modules/image';
import {useUpdateOrder} from '~modules/order';
import {EvenListenterName} from '~modules/types';
import {EmployeeScreenProps} from '~navigators/employee';

const Momo = ({
  navigation,
  route,
}: EmployeeScreenProps<'/employee/payment/momo'>) => {
  const {params} = route;
  const {orderId, required = false} = params;

  const {t} = useTranslation();
  const {isLoading, updateOrder} = useUpdateOrder();
  const {isLoading: uploadImgLoading, upload} = useUploadImage();

  const notFinished = useRef(true);

  const [image, setImage] = useState<PhotoFile>();

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener(
      EvenListenterName.setMomoImage,
      (photo: PhotoFile) => setImage(photo),
    );

    return () => listener.remove();
  }, []);

  const androidImagePath = `file://${image?.path}`;

  const onConfirm = async () => {
    if (!image?.path) {
      showErrorMessage(t('message.paymentImageRequired'));
      return;
    }
    try {
      const storagePath = `momo/${orderId}`;
      await upload({
        path: androidImagePath,
        name: storagePath,
      });
      const imageUrl = await storage().ref(storagePath).getDownloadURL();
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
          {t('common.momoTitle')}
        </Text>
      </View>

      {image ? (
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
      ) : (
        <FastImage
          source={images.momoQr}
          style={{
            maxWidth: '100%',
            height: 400,
            marginTop: 16,
          }}
          resizeMode="contain"
        />
      )}

      <View my={4}>
        <Text mb={4}>
          {image?.path
            ? t('common.updatePaymentImage')
            : t('common.addPaymentImage')}
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/common/camera-capture', {
              returnPath: '/employee/payment/momo',
              returnParams: params,
              callbackEvent: EvenListenterName.setMomoImage,
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
        title={t('action.confirmOrder')}
        onPress={onConfirm}
        isLoading={uploadImgLoading || isLoading}
      />
    </Screen>
  );
};

export default Momo;
