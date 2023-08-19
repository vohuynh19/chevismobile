import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TestHomeScreen from '~screens/vision-test/Home';
import AdjustSoundScreen from '~screens/vision-test/AdjustSound';
import CheckConditionScreen from '~screens/vision-test/CheckCondition';
import IllustrationScreen from '~screens/vision-test/Illustration';
import StartTestScreen from '~screens/vision-test/StartTest';
import TestResultScreen from '~screens/vision-test/TestResult';

import {SCREEN_PATHS} from './paths';
import {VisionStackParams} from './RootStack.type';

export const VisionTestStack = createStackNavigator<VisionStackParams>();

const VisionTestStackScreen = () => (
  <VisionTestStack.Navigator
    initialRouteName={SCREEN_PATHS.VISION_TEST.HOME}
    screenOptions={{
      headerShown: false,
    }}>
    <VisionTestStack.Screen
      name={SCREEN_PATHS.VISION_TEST.HOME}
      component={TestHomeScreen}
    />
    <VisionTestStack.Screen
      name={SCREEN_PATHS.VISION_TEST.TEST_RESULT}
      component={TestResultScreen}
    />

    <VisionTestStack.Group>
      <VisionTestStack.Screen
        name={SCREEN_PATHS.VISION_TEST.ADJUST_SOUND}
        component={AdjustSoundScreen}
      />
      <VisionTestStack.Screen
        name={SCREEN_PATHS.VISION_TEST.ILLUSTRATION}
        component={IllustrationScreen}
      />
      <VisionTestStack.Screen
        name={SCREEN_PATHS.VISION_TEST.CHECK_CONDITION}
        component={CheckConditionScreen}
      />

      <VisionTestStack.Screen
        name={SCREEN_PATHS.VISION_TEST.START_TEST}
        component={StartTestScreen}
      />
    </VisionTestStack.Group>
  </VisionTestStack.Navigator>
);

export default VisionTestStackScreen;
