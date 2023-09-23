import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuthState} from '~core/firebase';

import DashboardStackScreen from './DashboardStack';
import {RootStackParams} from './types';
import AuthStackScreen from './AuthStack';

export const RootStack = createStackNavigator<RootStackParams>();

/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  const {authState} = useAuthState();

  if (authState === null || authState === undefined) {
    return (
      <RootStack.Navigator initialRouteName="/auth">
        <RootStack.Screen
          name="/auth"
          options={{
            headerShown: false,
          }}
          component={AuthStackScreen}
        />
      </RootStack.Navigator>
    );
  }

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
