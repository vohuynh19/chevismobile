import {ComponentProps} from 'react';
import {Pressable} from 'react-native';

import {Input} from './Input';

interface Props extends ComponentProps<typeof Input> {
  onPress: () => void;
}

export const SelectInput = ({
  onPress,
  disabled,
  accessibilityHint,
  accessibilityLabel,
  ...props
}: Props) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
    accessibilityRole="button">
    <Input
      testID="inputSelect"
      editable={false}
      pointerEvents="none"
      disabled={disabled}
      {...props}
    />
  </Pressable>
);
