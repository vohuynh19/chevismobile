import storage from '@react-native-firebase/storage';
import {useEffect, useState} from 'react';
import {DeviceEventEmitter, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PhotoFile} from 'react-native-vision-camera';

import {Button, Icon, Screen, Text, View} from '~core/ui';
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
  const {orderId, total} = params;

  const [image, setImage] = useState<PhotoFile>();

  const {isLoading, updateOrder} = useUpdateOrder();
  const {isLoading: uploadImgLoading, upload} = useUploadImage();

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
      const storagePath = `banking/${orderId}`;

      await upload({
        path: androidImagePath,
        name: storagePath,
      });
      console.log('step 1', storagePath);
      const imageUrl = await storage().ref(storagePath).getDownloadURL();
      console.log('step 2', imageUrl);

      await updateOrder({
        id: orderId,
        updateInfo: {
          imageUrl,
          status: 'CONFIRMED',
        },
      });
      console.log('step 3');

      showSuccessMessage('Xác nhận đơn hàng thành công');
      DeviceEventEmitter.emit(EvenListenterName.reloadEmployeeHome);
      navigation.navigate('/employee/home');
    } catch (error) {
      console.log('error', error);
      showErrorMessage('Sự cố mạng, vui lòng thử lại');
    }
  };

  return (
    <Screen topInset px={4}>
      <Text lineHeight={28} fontSize={24} my={4}>
        QR chuyển khoản
      </Text>

      {image ? renderImage() : renderQRCode()}

      <View my={4}>
        <Text mb={4}>Thêm hình ảnh giao dịch thành công</Text>

        <TouchableOpacity
          disabled={!!image}
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
        title="Xác nhận đơn hàng"
        onPress={onConfirm}
        isLoading={uploadImgLoading || isLoading}
      />
    </Screen>
  );
};

export default Banking;
