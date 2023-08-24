import React, {useMemo} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Host} from 'react-native-portalize';

import HomeScreen from '~screens/dashboard';

import VisionTestStackScreen from './VisionTestStack';
import ProfileStackScreen from './ProfileStack';

import {DashboardStackParams} from './types';
import {Icon, View} from '~core/ui';
import {colors} from '~core/theme/primitives';

export const DashboardStack = createBottomTabNavigator<DashboardStackParams>();

const useTabOptions = () => {
  return useMemo<
    Record<keyof DashboardStackParams, BottomTabNavigationOptions>
  >(
    () => ({
      '/dashboard/home': {
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon
            size={32}
            color={focused ? 'primary800' : 'neutral500'}
            name="Home"
          />
        ),
      },
      '/vision-test': {
        tabBarIcon: () => (
          <View
            height={80}
            width={80}
            justifyContent="center"
            alignItems="center"
            backgroundColor="primary100"
            borderRadius="full"
            mb={8}>
            <View>
              <Icon name="Add" size={40} color="neutral800" />
            </View>
          </View>
        ),
        tabBarShowLabel: false,
        tabBarStyle: {display: 'none'},
      },
      '/dashboard/profile': {
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon
            size={32}
            color={focused ? 'primary800' : 'neutral500'}
            name="Admin"
          />
        ),
      },
    }),
    [],
  );
};

const DashboardScreen = () => {
  const tabOptions = useTabOptions();

  return (
    <Host>
      <DashboardStack.Navigator
        initialRouteName={'/dashboard/home'}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.primary800,
          tabBarInactiveTintColor: colors.primary200,
          tabBarStyle: {backgroundColor: colors.white},
        }}>
        <DashboardStack.Screen
          name={'/dashboard/home'}
          component={HomeScreen}
          options={tabOptions['/dashboard/home']}
        />
        <DashboardStack.Screen
          name={'/vision-test'}
          component={VisionTestStackScreen}
          options={tabOptions['/vision-test']}
        />
        <DashboardStack.Screen
          name={'/dashboard/profile'}
          component={ProfileStackScreen}
          options={tabOptions['/dashboard/profile']}
        />
      </DashboardStack.Navigator>
    </Host>
  );
};

export default DashboardScreen;
