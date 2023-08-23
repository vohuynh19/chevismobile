import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TestHomeScreen from '~screens/vision-test/home';
import AdjustSoundScreen from '~screens/vision-test/adjust-sound';
import CheckConditionScreen from '~screens/vision-test/check-condition';
import IllustrationScreen from '~screens/vision-test/illustration';
import StartTestScreen from '~screens/vision-test/start-test';
import TestCompletedScreen from '~screens/vision-test/test-completed';
import ViewResultScreen from '~screens/vision-test/view-result';

import {VisionStackParams} from './types';

export const VisionTestStack = createStackNavigator<VisionStackParams>();

const VisionTestStackScreen = () => (
  <VisionTestStack.Navigator
    initialRouteName={'/vision-test/home'}
    screenOptions={{
      headerShown: false,
    }}>
    <VisionTestStack.Screen
      name={'/vision-test/home'}
      component={TestHomeScreen}
    />

    <VisionTestStack.Screen
      name={'/vision-test/view-result'}
      component={ViewResultScreen}
    />

    <VisionTestStack.Group>
      <VisionTestStack.Screen
        name={'/vision-test/adjust-sound'}
        component={AdjustSoundScreen}
      />
      <VisionTestStack.Screen
        name={'/vision-test/illustration'}
        component={IllustrationScreen}
      />
      <VisionTestStack.Screen
        name={'/vision-test/check-condition'}
        component={CheckConditionScreen}
      />

      <VisionTestStack.Screen
        name={'/vision-test/start-test'}
        component={StartTestScreen}
      />

      <VisionTestStack.Screen
        name={'/vision-test/test-completed'}
        component={TestCompletedScreen}
      />
    </VisionTestStack.Group>
  </VisionTestStack.Navigator>
);

export default VisionTestStackScreen;
