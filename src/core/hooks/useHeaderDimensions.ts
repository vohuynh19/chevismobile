import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getDefaultHeaderHeight} from '@react-navigation/elements';

export const useHeaderDimensions = () => {
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const navigationBarHeight = getDefaultHeaderHeight(
    dimensions,
    false,
    statusBarHeight,
  );

  return {
    statusBarHeight,
    navigationBarHeight,
  };
};
