import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Alert} from 'react-native';

export const useBack = ({
  enabled,
  onPress,
  title,
  description,
  cancelText,
  okText,
}: {
  enabled: boolean;
  onPress: () => void;
  title: string;
  description: string;
  cancelText: string;
  okText: string;
}) => {
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
        if (enabled) {
          Alert.alert(title, description, [
            {text: cancelText, style: 'cancel', onPress: () => {}},
            {
              text: okText,
              style: 'destructive',
              onPress,
            },
          ]);
        } else {
          navigation.dispatch(e.data.action);
        }
      }),
    [navigation, onPress, enabled, title, description, cancelText, okText],
  );

  return null;
};
