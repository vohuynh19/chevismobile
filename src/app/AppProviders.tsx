import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {Host} from 'react-native-portalize';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from '~core/theme';

import NavContainer from '~navigators/NavContainer';

const queryClient = new QueryClient();

const AppProviders = ({children}: {children: ReactNode}) => (
  <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
);

export default AppProviders;
