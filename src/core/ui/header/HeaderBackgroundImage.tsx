import {ComponentProps, ReactNode, useMemo} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIos} from '../../utils/platform';

import {View} from '../view';

interface Props extends ComponentProps<typeof View> {
  children?: ReactNode;
  height: number;
  lightBackground?: boolean;
  image: ImageSourcePropType;
  imageStyle?: ViewStyle;
}

export const HeaderBackgroundImage = ({
  children,
  height,
  image,
  lightBackground,
  imageStyle,
  ...viewProps
}: Props) => {
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const imageBackgroundStyle = useMemo(
    () => ({
      height,
      width: dimensions.width,
    }),
    [dimensions.width, height],
  );

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={[styles.background, imageBackgroundStyle, imageStyle]}>
      <StatusBar
        barStyle={lightBackground ? 'dark-content' : 'light-content'}
      />
      <View
        px={4}
        style={{marginTop: insets.top + (isIos() ? 8 : 16) || 24}}
        {...viewProps}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    overflow: 'hidden',
  },
});
