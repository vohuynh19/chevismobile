import {ReactElement, ReactNode} from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {
  ButtonShape,
  ButtonSize,
  useButtonStyles,
  Variant,
} from './Button.styles';
import {theme} from '../../theme';
import {Gradient} from '../gradient';
import {Text} from '../text/Text';
import {View} from '../view/View';

interface ButtonProps extends Omit<PressableProps, 'style'> {
  style?: StyleProp<ViewStyle>;
  stylePressed?: StyleProp<ViewStyle>;
  loadingStyle?: StyleProp<ViewStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  rightIconStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ReactElement;
  children?: ReactNode;
  variant?: Variant;
  size?: ButtonSize;
  shape?: ButtonShape;
  inverted?: boolean;
  flex?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  testID?: string;
  title?: string;
  visuallyDisabled?: boolean;
}

export const Button = ({
  style,
  stylePressed,
  textStyle,
  loadingStyle,
  leftIcon,
  leftIconStyle,
  children,
  rightIcon,
  rightIconStyle,
  icon,
  variant = 'primary',
  size = 'base',
  shape = 'rounded',
  inverted = false,
  fullWidth,
  flex,
  isLoading,
  disabled,
  visuallyDisabled = false,
  testID,
  title,
  ...rest
}: ButtonProps) => {
  const styles = useButtonStyles({
    variant,
    size,
    shape,
    inverted,
  });

  const getPressableStyle = ({pressed}: PressableStateCallbackType) => [
    styles.button,
    style,
    fullWidth && styles.fullWidth,
    flex && styles.flex,
    disabled || visuallyDisabled ? styles.disabled : undefined,
    pressed && [styles.pressed, stylePressed],
  ];

  return (
    <Pressable
      style={getPressableStyle}
      accessibilityRole="button"
      disabled={disabled || isLoading}
      testID={testID}
      {...rest}>
      {variant === 'primary' && !disabled && !visuallyDisabled && (
        <Gradient
          direction="leftToRight"
          fromColor={theme.colors.purpleGradientFrom}
          toColor={theme.colors.purpleGradientTo}
        />
      )}
      {variant === 'primary' && inverted && !disabled && (
        <Gradient
          direction="leftToRight"
          fromColor={theme.colors.greenGradientFrom}
          toColor={theme.colors.greenGradientTo}
        />
      )}
      {Boolean(leftIcon) && (
        <View style={[styles.leftIcon, leftIconStyle]} testID="left-icon">
          {leftIcon}
        </View>
      )}
      {isLoading && (
        <ActivityIndicator
          color={styles.text.color}
          style={[styles.loading, loadingStyle]}
          testID="indicator-button"
        />
      )}
      {Boolean(title) && !isLoading && (
        <Text
          style={[
            styles.text,
            textStyle,
            disabled || visuallyDisabled ? styles.textDisabled : undefined,
          ]}
          accessible={false}>
          {title}
        </Text>
      )}
      {icon ?? children}
      {Boolean(rightIcon) && (
        <View
          accessible={false}
          style={[styles.rightIcon, rightIconStyle]}
          testID="right-icon">
          {rightIcon}
        </View>
      )}
    </Pressable>
  );
};
