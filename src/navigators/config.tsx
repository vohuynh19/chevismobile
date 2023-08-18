import {createStackNavigator} from '@react-navigation/stack';

/**
 * All configurations will be put in this file to avoid circular importing
 */

export const RootStack = createStackNavigator();

export type StackType = typeof RootStack;

export const SCREEN_PATHS = {
  VISION_TEST: {
    HOME: '/vision-test',
    ADJUST_SOUND: '/vision-test/adjust-sound',
    ILLUSTRATION: '/vision-test/illustration',
    CHECK_CONDITION: '/vision-test/check-condition',
    START_TEST: '/vision-test/start-test',
    TEST_RESULT: '/vision-test/test-result',
  },
};
