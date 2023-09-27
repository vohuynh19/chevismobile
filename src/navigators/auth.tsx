import React from 'react';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '~screens/auth/login';

import {SCREEN_PATHS} from './paths';

export type AuthScreenProps<T extends keyof AuthStackParams> = StackScreenProps<
  AuthStackParams,
  T
>;

export type AuthStackParams = {
  [SCREEN_PATHS.AUTH.LOGIN]: undefined;
};

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
