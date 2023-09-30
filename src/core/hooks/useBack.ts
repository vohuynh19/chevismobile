import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';

export const useBack = ({
  enabled,
  stateRef,
  onPress,
  title,
  description,
  cancelText,
  okText,
}: {
  enabled: boolean;
  stateRef: React.RefObject<boolean>;
  onPress: () => void;
  title: string;
  description: string;
  cancelText: string;
  okText: string;
}) => {
  const navigation = useNavigation();

  useEffect(
    () =>
      enabled
        ? navigation.addListener('beforeRemove', e => {
            e.preventDefault();
            if (stateRef.current) {
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
          })
        : undefined,
    [
      enabled,
      navigation,
      onPress,
      stateRef,
      title,
      description,
      cancelText,
      okText,
    ],
  );

  return null;
};
