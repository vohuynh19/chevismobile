import {ThemeProvider} from '@shopify/restyle';
import {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {Host} from 'react-native-portalize';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from '~core/theme';

import NavContainer from '~navigators/NavContainer';

const AppProviders = ({children}: {children: ReactNode}) => (
  <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <NavContainer>
        <Host>{children}</Host>
      </NavContainer>
    </ThemeProvider>
  </SafeAreaProvider>
);

export default AppProviders;
