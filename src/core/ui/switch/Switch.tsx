import React, {ComponentProps, ReactNode, useMemo} from 'react';
import {
  StyleSheet,
  Switch as RNSwitch,
  SwitchProps,
  TouchableOpacity,
} from 'react-native';

import {useTheme} from '../../theme';

import {Text} from '../text';

const BaseSwitch = (props: SwitchProps) => {
  const theme = useTheme();

  const trackColor = useMemo(
    () => ({
      true: theme.colors.secondary400,
      false: theme.colors.primary50,
    }),
    [theme],
  );

  return <RNSwitch testID="baseSwitch" trackColor={trackColor} {...props} />;
};

interface Props extends SwitchProps {
  label?: ReactNode;
  labelProps?: ComponentProps<typeof Text>;
}

const SwitchWithLabel = ({
  onValueChange,
  value,
  label,
  labelProps,
  accessibilityLabel,
  ...rest
}: Props) => (
  <TouchableOpacity
    testID="switchWithLabel"
    style={styles.touchable}
    onPress={rest.disabled ? undefined : () => onValueChange?.(!value)}
    activeOpacity={1}
    accessibilityRole="switch"
    accessibilityLabel={typeof label === 'string' ? label : accessibilityLabel}
    accessibilityState={{
      checked: value,
    }}>
    {typeof label === 'string' ? (
      <Text variant="body" color="primary800" flex={1} {...labelProps}>
        {label}
      </Text>
    ) : (
      label
    )}
    <BaseSwitch value={value} onValueChange={onValueChange} {...rest} />
  </TouchableOpacity>
);

export const Switch = ({label, ...props}: Props) => {
  if (label) {
    return <SwitchWithLabel label={label} {...props} />;
  }
  return <BaseSwitch {...props} />;
};

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
