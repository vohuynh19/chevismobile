import React from 'react';

import TestHomeScreen from '~screens/VisionTest';
import AdjustSoundScreen from '~screens/VisionTest/AdjustSound';
import CheckConditionScreen from '~screens/VisionTest/CheckCondition';
import IllustrationScreen from '~screens/VisionTest/Illustration';
import StartTestScreen from '~screens/VisionTest/StartTest';
import TestResultScreen from '~screens/VisionTest/TestResult';

import {SCREEN_PATHS, StackType} from './config';

const VisionTestStack = (Stack: StackType) => (
  <>
    <Stack.Screen
      name={SCREEN_PATHS.VISION_TEST.HOME}
      component={TestHomeScreen}
    />

    <Stack.Screen
      name={SCREEN_PATHS.VISION_TEST.ADJUST_SOUND}
      component={AdjustSoundScreen}
    />

    <Stack.Screen
      name={SCREEN_PATHS.VISION_TEST.ILLUSTRATION}
      component={IllustrationScreen}
    />

    <Stack.Screen
      name={SCREEN_PATHS.VISION_TEST.CHECK_CONDITION}
      component={CheckConditionScreen}
    />

    <Stack.Screen
      name={SCREEN_PATHS.VISION_TEST.START_TEST}
      component={StartTestScreen}
    />

    <Stack.Screen
      name={SCREEN_PATHS.VISION_TEST.TEST_RESULT}
      component={TestResultScreen}
    />
  </>
);

export default VisionTestStack;
