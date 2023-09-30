import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';

export const useQuitApp = (props: {message: string}) => {
  const {message} = props;
  const [exitApp, setExitApp] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          setTimeout(() => {
            setExitApp(0);
          }, 2000); // 2 seconds to tap second-time

          if (exitApp === 0) {
            setExitApp(exitApp + 1);

            ToastAndroid.show(message, ToastAndroid.SHORT);
          } else if (exitApp === 1) {
            BackHandler.exitApp();
          }
          return true;
        },
      );
      return () => {
        console.log('remove');
        return backHandler.remove();
      };
    }, [exitApp, message]),
  );

  return null;
};
