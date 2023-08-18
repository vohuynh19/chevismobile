import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '~screens/Splash';

import VisionTestStack from './VisionTestStack';
import {RootStackParams} from './RootStack.type';

export const RootStack = createStackNavigator<RootStackParams>();

/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="/">
      <RootStack.Screen
        name="/"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="/vision-test"
        options={{
          headerShown: false,
        }}
        component={VisionTestStack}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
