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
import {useTranslation} from 'react-i18next';

export const DashboardStack = createBottomTabNavigator<DashboardStackParams>();

const useTabOptions = () => {
  const {t} = useTranslation();

  return useMemo<
    Record<keyof DashboardStackParams, BottomTabNavigationOptions>
  >(
    () => ({
      '/dashboard/home': {
        tabBarLabel: t('navigation.home'),
        tabBarIcon: ({focused}) => (
          <Icon color={focused ? 'primary800' : 'primary200'} name="Home" />
        ),
      },
      '/vision-test': {
        tabBarIcon: () => (
          <View
            height={80}
            width={80}
            justifyContent="center"
            alignItems="center"
            backgroundColor="primary200"
            borderRadius="full"
            mb={8}>
            <View>
              <Icon name="Add" size={40} color="primary800" />
            </View>
          </View>
        ),
        tabBarLabel: '',
        tabBarStyle: {display: 'none'},
      },
      '/dashboard/profile': {
        tabBarLabel: t('navigation.profile'),
        tabBarIcon: ({focused}) => (
          <Icon color={focused ? 'primary800' : 'primary200'} name="Admin" />
        ),
      },
    }),
    [t],
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
