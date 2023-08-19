import {ComponentProps} from 'react';
import {Portal} from 'react-native-portalize';

import {View} from '../view/View';
import {Spinner} from './Spinner';

export const SpinnerOverlay = (props: ComponentProps<typeof Spinner>) => (
  <Portal>
    <View
      flex={1}
      width="100%"
      height="100%"
      bg="overlay"
      position="absolute"
      alignItems="center"
      justifyContent="center">
      <Spinner size="large" {...props} />
    </View>
  </Portal>
);
