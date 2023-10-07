import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {DeviceEventEmitter, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {colors} from '~core/theme';
import {Screen, Text, View} from '~core/ui';
import {EmployeeScreenProps} from '~navigators/employee';

const CameraCapture = ({
  navigation,
  route,
}: EmployeeScreenProps<'/common/camera-capture'>) => {
  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera'],
  });
  const {hasPermission, requestPermission} = useCameraPermission();

  const cameraRef = useRef<Camera>(null);

  const [isActive, setActive] = useState(true);

  const {params} = route;
  const {returnParams, returnPath, callbackEvent} = params;

  useFocusEffect(
    useCallback(() => {
      requestPermission();
    }, [requestPermission]),
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      setActive(false);
    });
    return unsubscribe;
  }, [navigation]);

  const onTakePhoto = async () => {
    const photos = await cameraRef.current?.takePhoto();
    navigation.navigate(returnPath, {...returnParams});
    DeviceEventEmitter.emit(callbackEvent, photos);
  };

  if (!hasPermission || device == null) {
    return (
      <Screen topInset>
        <View flex={1} alignItems="center" justifyContent="center">
          <Text>Vui lòng cho phép ứng dụng sử dụng camera </Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen topInset>
      <Camera
        ref={cameraRef}
        photo={true}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        orientation="portrait"
      />

      <View
        flex={1}
        width={'100%'}
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="center">
        <TouchableOpacity
          onPress={onTakePhoto}
          style={{
            position: 'absolute',
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.neutral600,
            bottom: 32,
          }}
        />
      </View>
    </Screen>
  );
};

export default CameraCapture;
