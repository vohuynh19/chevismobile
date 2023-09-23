import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackParams} from './types';
import LoginScreen from '~screens/auth/login';

export const AuthStack = createStackNavigator<AuthStackParams>();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    initialRouteName={'/auth/login'}
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="/auth/login" component={LoginScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
