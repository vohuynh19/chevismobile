import {ComponentProps} from 'react';

import {View} from '../view';

export const Divider = (props: ComponentProps<typeof View>) => (
  <View
    height={1}
    backgroundColor="neutralLavender200"
    my={4}
    width="120%"
    ml="-4"
    {...props}
  />
);
