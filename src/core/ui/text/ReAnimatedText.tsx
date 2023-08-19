import React, {ComponentProps} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {SharedValue, useAnimatedProps} from 'react-native-reanimated';
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

Animated.addWhitelistedNativeProps({text: true});

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type Props = TextProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> & {text?: SharedValue<string>};

const restyleFns = [
  ...textRestyleFunctions,
  layout,
  backgroundColor,
  backgroundColorShorthand,
];

const AnimatedTextWithSharedValue = ({text, ...props}: Props) => {
  const animatedProps = useAnimatedProps(
    () => ({
      text: text?.value,
    }),
    [text?.value],
  );

  return (
    <AnimatedTextInput
      testID="inputReAnimatedText"
      underlineColorAndroid="transparent"
      editable={false}
      value={text?.value}
      // @ts-expect-error text: string and text: SharedValue are different
      animatedProps={animatedProps}
      {...props}
    />
  );
};

export const ReAnimatedText = createRestyleComponent<
  Props & Omit<ComponentProps<typeof Animated.Text>, keyof Props>,
  Theme
>(restyleFns, AnimatedTextWithSharedValue);

ReAnimatedText.defaultProps = {
  variant: 'body',
  color: 'primary800',
};
