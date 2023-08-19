import {ComponentProps} from 'react';

import {View} from '../view';

export const TitleDivider = (props: ComponentProps<typeof View>) => (
  <View my={2} height={4} bg="secondary400" width={32} {...props} />
);
