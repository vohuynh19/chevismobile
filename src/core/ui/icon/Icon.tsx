import {memo} from 'react';
import {Pressable, PressableProps} from 'react-native';

import {Theme, useTheme} from '../../theme';

import * as icons from './icons';

export type IconName = keyof typeof icons;

interface Props extends PressableProps {
  name: IconName;
  color?: keyof Theme['colors'] | 'none';
  size?: number;
}

export const Icon = memo(
  ({name, size, color, onPress, ...pressableProps}: Props) => {
    const IconCmp = icons[name];
    const theme = useTheme();

    if (!IconCmp) {
      return null;
    }

    const getColorProps = () => {
      if (color === 'none') {
        return 'none';
      }
      if (color) {
        return theme.colors[color];
      }

      return theme.colors.primary500;
    };

    const child = <IconCmp size={size} fill={getColorProps()} />;

    return onPress ? (
      <Pressable onPress={onPress} {...pressableProps}>
        {child}
      </Pressable>
    ) : (
      child
    );
  },
);
