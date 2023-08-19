import {ComponentProps} from 'react';
import Animated from 'react-native-reanimated';
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  TextProps,
  textRestyleFunctions,
} from '@shopify/restyle';

import {Theme} from '../../theme';

type Props = TextProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme>;

const restyleFns = [
  ...textRestyleFunctions,
  layout,
  backgroundColor,
  backgroundColorShorthand,
];

export const AnimatedText = createRestyleComponent<
  Props & Omit<ComponentProps<typeof Animated.Text>, keyof Props>,
  Theme
>(restyleFns, Animated.Text);

AnimatedText.defaultProps = {
  variant: 'body',
  color: 'primary800',
};
