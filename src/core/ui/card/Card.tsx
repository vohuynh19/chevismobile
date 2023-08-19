import {ReactNode} from 'react';
import {
  AccessibilityProps,
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {all, createRestyleComponent} from '@shopify/restyle';

import {isAndroid} from '../../utils/platform';
import {AllRestyleProps, makeStyles, Theme} from '../../theme';
import {View} from '../view';

interface CardProps extends AllRestyleProps, AccessibilityProps {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  pressedStyle?: ViewStyle;
  disabled?: boolean;
}

const CardCmp = ({
  children,
  onPress,
  style,
  pressedStyle,
  accessibilityHint,
  accessibilityLabel,
  accessibilityValue,
  accessible = true,
  disabled,
}: CardProps) => {
  const styles = useStyles();
  const passedStyle = StyleSheet.flatten(style);

  const getPressableStyle = ({pressed}: PressableStateCallbackType) => [
    styles.card,
    passedStyle,
    pressed && [styles.cardPressed, pressedStyle],
  ];

  const sharedProps = {
    accessible,
    accessibilityHint,
    accessibilityLabel,
    accessibilityValue,
  };

  if (onPress) {
    return (
      <Pressable
        {...sharedProps}
        accessibilityRole="button"
        onPress={onPress}
        style={getPressableStyle}
        disabled={disabled}>
        {children}
      </Pressable>
    );
  }

  return (
    <View
      {...sharedProps}
      borderRadius="lg"
      bg="white"
      overflow="hidden"
      p={3}
      style={passedStyle}
      accessibilityRole="text">
      {children}
    </View>
  );
};

const useStyles = makeStyles({
  card: {
    p: 3,
    borderRadius: isAndroid() ? 'xl' : 'lg',
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: 'transparent',
  },
  cardPressed: {
    backgroundColor: 'primary50',
    borderColor: 'white',
  },
});

export const Card = createRestyleComponent<CardProps, Theme>(all, CardCmp);
