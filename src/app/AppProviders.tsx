import {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {Host} from 'react-native-portalize';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import NavContainer from '~navigators/NavContainer';

const AppProviders = ({children}: {children: ReactNode}) => (
  <SafeAreaProvider>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <NavContainer>
      <Host>{children}</Host>
    </NavContainer>
  </SafeAreaProvider>
);

export default AppProviders;
