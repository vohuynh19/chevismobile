import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStackScreen from './RootStack';

/**
 * Container to handle global logic such as authentication/deeplink/listener...
 */
const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
