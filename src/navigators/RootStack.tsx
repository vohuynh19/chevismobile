import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardStackScreen from './DashboardStack';
import {RootStackParams} from './types';

export const RootStack = createStackNavigator<RootStackParams>();

/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="/dashboard">
      <RootStack.Screen
        name="/dashboard"
        options={{
          headerShown: false,
        }}
        component={DashboardStackScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
