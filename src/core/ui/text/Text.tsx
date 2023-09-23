import {ComponentProps} from 'react';
import {Text as RNText} from 'react-native';
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

export const Text = createRestyleComponent<
  Props & Omit<ComponentProps<typeof RNText>, keyof Props>,
  Theme
>(restyleFns, RNText);

Text.defaultProps = {
  variant: 'body',
  color: 'primary900',
};
