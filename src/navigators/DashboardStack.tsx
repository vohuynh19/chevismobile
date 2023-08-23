import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Host} from 'react-native-portalize';

import HomeScreen from '~screens/dashboard';

import VisionTestStackScreen from './VisionTestStack';
import ProfileStackScreen from './ProfileStack';

import {DashboardStackParams} from './types';

export const DashboardStack = createBottomTabNavigator<DashboardStackParams>();

const DashboardScreen = () => (
  <Host>
    <DashboardStack.Navigator
      initialRouteName={'/dashboard/home'}
      screenOptions={{
        headerShown: false,
      }}>
      <DashboardStack.Screen name={'/dashboard/home'} component={HomeScreen} />

      <DashboardStack.Screen
        name={'/vision-test'}
        component={VisionTestStackScreen}
      />

      <DashboardStack.Screen
        name={'/dashboard/profile'}
        component={ProfileStackScreen}
      />
    </DashboardStack.Navigator>
  </Host>
);

export default DashboardScreen;
