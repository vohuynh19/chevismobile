import {ComponentProps, ReactNode} from 'react';

import {View} from '../view';

interface Props extends ComponentProps<typeof View> {
  children: ReactNode;
}

export const Center = ({children, ...restyleProps}: Props) => (
  <View flex={1} justifyContent="center" alignItems="center" {...restyleProps}>
    {children}
  </View>
);
