import {ReactNode} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

import {useHeaderDimensions} from '../../hooks/useHeaderDimensions';
import {makeStyles} from '../../theme';

import {View} from '../view/View';

interface Props {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  shadowVisible?: boolean;
  animated?: boolean;
  asOverlay?: boolean;
}

export const Header = ({
  children,
  containerStyle,
  style,
  shadowVisible,
  animated,
  asOverlay,
}: Props) => {
  const styles = useStyles();
  const {navigationBarHeight, statusBarHeight} = useHeaderDimensions();

  return (
    <Animated.View
      {...(animated && {entering: FadeInDown})}
      pointerEvents="box-none"
      style={[
        {
          height: navigationBarHeight,
        },
        containerStyle,
        asOverlay && styles.overlay,
        shadowVisible && styles.contentShadow,
      ]}>
      <View pointerEvents="none" height={statusBarHeight} />
      <View pointerEvents="box-none" style={[styles.content, style]}>
        {children}
      </View>
    </Animated.View>
  );
};

// @ts-expect-error type mismatch in makeStyles
const useStyles = makeStyles(({theme}) => ({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  contentShadow: {
    ...theme.shadow.header,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 'overlay',
  },
}));
