import {ComponentProps} from 'react';

import {View} from './View';

export const RoundedView = ({
  size,
  ...props
}: ComponentProps<typeof View> & {size?: number}) => (
  <View
    height={size || 32}
    width={size || 32}
    borderRadius="full"
    justifyContent="center"
    alignItems="center"
    {...props}
  />
);
