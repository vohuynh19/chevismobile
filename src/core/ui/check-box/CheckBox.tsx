import React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import {makeStyles, useTheme} from '../../theme';

import {Icon} from '../icon';
import {Text} from '../text/Text';

interface CheckBoxProps extends PressableProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  title?: string;
  visuallyDisabled?: boolean;
  checkboxStyle?: ViewStyle;
}

export const CheckBox = ({
  checked = false,
  title,
  onChange,
  disabled,
  visuallyDisabled,
  checkboxStyle,
  ...rest
}: CheckBoxProps) => {
  const styles = useStyles(checked);
  const theme = useTheme();

  const progress = useDerivedValue(
    () =>
      withTiming(checked ? 1 : 0, {
        duration: 250,
      }),
    [checked],
  );

  const opacityStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(progress.value, [0, 1], [0, 1]),
    }),
    [progress],
  );

  const colorsStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [theme.colors.transparent, theme.colors.primary500],
      ),
      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        [theme.colors.primary300, theme.colors.primary500],
      ),
    }),
    [progress],
  );

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: !!checked,
      }}
      style={styles.pressable}
      onPress={() => onChange(!checked)}
      disabled={disabled}
      {...rest}>
      <Animated.View
        style={[
          styles.checkBox,
          colorsStyle,
          checkboxStyle,
          (disabled || visuallyDisabled) && styles.disabled,
        ]}>
        <Animated.View style={opacityStyle}>
          <Icon name="Check" color="neutralLavender50" size={16} />
        </Animated.View>
      </Animated.View>
      {Boolean(title) && (
        <Text color="neutral900" numberOfLines={1} ml={2}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const useStyles = makeStyles({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 'base',
    borderWidth: 2,
  },
  disabled: {
    borderColor: 'neutral500',
  },
});
