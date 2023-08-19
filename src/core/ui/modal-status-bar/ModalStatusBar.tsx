import {useMemo} from 'react';
import {StatusBar} from 'react-native';
import {isAndroid, isIos} from '../../utils/platform';

export const ModalStatusBar = () => {
  const barStyle = useMemo(() => {
    if (isIos()) {
      return 'light-content';
    }
    if (isAndroid()) {
      return 'dark-content';
    }
    return 'dark-content';
  }, []);

  return <StatusBar barStyle={barStyle} />;
};
