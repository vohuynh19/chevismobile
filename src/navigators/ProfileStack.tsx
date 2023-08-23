import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '~screens/dashboard/profile';
import SettingsScreen from '~screens/dashboard/profile/settings';
import UpdateProfileScreen from '~screens/dashboard/profile/update-profile';

import {ProfileStackParams} from './types';

export const ProfileStack = createStackNavigator<ProfileStackParams>();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    initialRouteName={'/dashboard/profile/home'}
    screenOptions={{
      headerShown: false,
    }}>
    <ProfileStack.Screen
      name={'/dashboard/profile/home'}
      component={ProfileScreen}
    />

    <ProfileStack.Screen
      name={'/dashboard/profile/settings'}
      component={SettingsScreen}
    />
    <ProfileStack.Screen
      name={'/dashboard/profile/update-profile'}
      component={UpdateProfileScreen}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
