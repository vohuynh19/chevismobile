import type {ReactNode} from 'react';
import {forwardRef} from 'react';
import type {ScrollViewProps, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {all, createRestyleComponent} from '@shopify/restyle';

import {AllRestyleProps, Theme, useTheme} from '../../theme';

import {View} from '../view/View';

interface Props extends ScrollViewProps {
  children: ReactNode;
  bottomInset?: boolean;
  extraBottomInset?: boolean;
  topInset?: boolean;
  animated?: boolean;
  hasHorizontalPadding?: boolean;
  scrollViewStyle?: ViewStyle;
}

const ScrollViewScreenCmp = forwardRef<ScrollView, Props>(
  (
    {
      children,
      bottomInset,
      extraBottomInset,
      topInset,
      scrollViewStyle,
      style,
      animated,
      hasHorizontalPadding = true,
      ...rest
    },
    ref,
  ) => {
    const inset = useSafeAreaInsets();
    const theme = useTheme();

    const contentContainerStyle = [
      {
        flexGrow: 1,
        paddingHorizontal: hasHorizontalPadding ? theme.spacing[4] : 0,
        paddingBottom:
          bottomInset || extraBottomInset
            ? inset.bottom + (extraBottomInset ? 16 : 0) || theme.spacing[4]
            : 0,
        paddingTop: topInset ? inset.top : 0,
      },
      style,
    ];

    const Component = animated ? Animated.ScrollView : ScrollView;

    return (
      <View flex={1}>
        {/* @ts-expect-error types mismatch */}
        <Component
          ref={ref}
          contentContainerStyle={contentContainerStyle}
          alwaysBounceVertical={false}
          style={scrollViewStyle}
          {...rest}>
          {children}
        </Component>
      </View>
    );
  },
);

export const ScrollViewScreen = createRestyleComponent<
  Props & AllRestyleProps,
  Theme
>(all, ScrollViewScreenCmp);
