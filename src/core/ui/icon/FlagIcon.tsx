import {memo} from 'react';

import * as flagIcons from './icons/flags';

export type FlagIconName = keyof typeof flagIcons;

interface Props {
  name: FlagIconName;
  size?: number;
}

export const FlagIcon = memo(({name, size = 25}: Props) => {
  const FlagComponent = flagIcons[name];

  return <FlagComponent size={size} />;
});
