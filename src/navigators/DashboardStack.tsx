import React, {useMemo} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Host} from 'react-native-portalize';

import HomeScreen from '~screens/dashboard';

import HistoryStackScreen from './HistoryStack';

import {Icon, View} from '~core/ui';
import {colors} from '~core/theme/primitives';
import {DashboardStackParams} from './types';
import OrderStackScreen from './OrderStack';

export const DashboardStack = createBottomTabNavigator<DashboardStackParams>();

const useTabOptions = () => {
  return useMemo<
    Record<Partial<keyof DashboardStackParams>, BottomTabNavigationOptions>
  >(
    () => ({
      '/dashboard/home': {
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon
            size={32}
            color={focused ? 'primary800' : 'neutral700'}
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
            backgroundColor="primary600"
            borderRadius="full"
            mb={8}>
            <View>
              <Icon name="Add" size={40} color="neutral300" />
            </View>
          </View>
        ),
        tabBarShowLabel: false,
        tabBarStyle: {display: 'none'},
      },
      '/dashboard/order': {
        tabBarIcon: () => (
          <View
            height={80}
            width={80}
            justifyContent="center"
            alignItems="center"
            backgroundColor="primary600"
            borderRadius="full"
            mb={8}>
            <View>
              <Icon name="Add" size={40} color="neutral300" />
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
            color={focused ? 'primary800' : 'neutral700'}
            name="Admin"
          />
        ),
      },
      '/dashboard/history': {
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon
            size={32}
            color={focused ? 'primary800' : 'neutral700'}
            name="Tasks"
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
          tabBarStyle: {backgroundColor: colors.white, paddingBottom: 12},
        }}>
        <DashboardStack.Screen
          name={'/dashboard/home'}
          component={HomeScreen}
          options={tabOptions['/dashboard/home']}
        />
        <DashboardStack.Screen
          name={'/dashboard/order'}
          component={OrderStackScreen}
          options={tabOptions['/dashboard/order']}
        />
        <DashboardStack.Screen
          name={'/dashboard/history'}
          component={HistoryStackScreen}
          options={tabOptions['/dashboard/history']}
        />
      </DashboardStack.Navigator>
    </Host>
  );
};

export default DashboardScreen;
