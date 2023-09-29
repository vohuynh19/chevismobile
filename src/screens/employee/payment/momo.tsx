import storage from '@react-native-firebase/storage';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, DeviceEventEmitter, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PhotoFile} from 'react-native-vision-camera';
import {images} from '~assets';

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
  const {orderId} = params;
  const notFinished = useRef(true);

  const [image, setImage] = useState<PhotoFile>();

  const {isLoading, updateOrder} = useUpdateOrder();
  const {isLoading: uploadImgLoading, upload} = useUploadImage();

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener(
      EvenListenterName.setMomoImage,
      (photo: PhotoFile) => setImage(photo),
    );

    return () => listener.remove();
  }, []);

  const androidImagePath = `file://${image?.path}`;

  const onConfirm = async () => {
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
          status: 'CONFIRMED',
        },
      });
      notFinished.current = false;
      showSuccessMessage('Xác nhận đơn hàng thành công');
      DeviceEventEmitter.emit(EvenListenterName.reloadEmployeeHome);
      navigation.navigate('/employee/home');
    } catch (error) {
      console.log('error', error);
      showErrorMessage('Sự cố mạng, vui lòng thử lại');
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
    showSuccessMessage(
      'Quay về thành công, vui lòng tiếp tục chọn phương thức thanh toán khác',
    );
    navigation.goBack();
  }, [orderId, navigation, updateOrder]);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
        if (notFinished.current) {
          Alert.alert(
            'Quay về',
            'Vui lòng hoàn thành thanh toán trước khi quay về',
            [
              {text: 'Ở lại', style: 'cancel', onPress: () => {}},
              {
                text: 'Vẫn quay về',
                style: 'destructive',
                onPress: deletePayment,
              },
            ],
          );
        } else {
          navigation.dispatch(e.data.action);
        }
      }),
    [navigation, deletePayment],
  );

  return (
    <Screen topInset px={4}>
      <View flexDirection="row" alignItems="center">
        <NavButton />
        <Text fontWeight="700" fontSize={18}>
          QR chuyển khoản
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
            ? 'Thay đổi hình ảnh giao dịch'
            : 'Thêm hình ảnh giao dịch'}
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
        title="Xác nhận đơn hàng"
        onPress={onConfirm}
        isLoading={uploadImgLoading || isLoading}
      />
    </Screen>
  );
};

export default Momo;
