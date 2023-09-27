import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HistoryStackParams} from './types';
import HistoryOverviewScreen from '~screens/dashboard/history/overview';

export const HistoryStack = createStackNavigator<HistoryStackParams>();

const HistoryStackScreen = () => (
  <HistoryStack.Navigator
    initialRouteName={'/dashboard/history/overview'}
    screenOptions={{
      headerShown: false,
    }}>
    <HistoryStack.Screen
      name={'/dashboard/history/overview'}
      component={HistoryOverviewScreen}
    />
  </HistoryStack.Navigator>
);

export default HistoryStackScreen;
