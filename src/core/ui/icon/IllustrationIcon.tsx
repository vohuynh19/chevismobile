import {memo} from 'react';
import {Pressable, PressableProps} from 'react-native';

import * as illustrationIcons from './icons/illustrations';

export type IllustrationIconName = keyof typeof illustrationIcons;

interface Props extends PressableProps {
  name: IllustrationIconName;
  size?: number;
}

export const IllustrationIcon = memo(
  ({name, size, onPress, ...pressableProps}: Props) => {
    const IconCmp = illustrationIcons[name];

    if (!IconCmp) {
      return null;
    }

    const child = <IconCmp size={size} />;

    return onPress ? (
      <Pressable onPress={onPress} {...pressableProps}>
        {child}
      </Pressable>
    ) : (
      child
    );
  },
);
