/**
 * All configurations will be put in this file to avoid circular importing
 */

const VISION_TEST_PREFIX = '/vision-test';

export const SCREEN_PATHS = {
  SPLASH: '/',
  HOME: '/home',
  VISION_TEST: {
    DEFAULT: VISION_TEST_PREFIX,
    HOME: `${VISION_TEST_PREFIX}/home`,
    ADJUST_SOUND: `${VISION_TEST_PREFIX}/adjust-sound`,
    ILLUSTRATION: `${VISION_TEST_PREFIX}/illustration`,
    CHECK_CONDITION: `${VISION_TEST_PREFIX}/check-condition`,
    START_TEST: `${VISION_TEST_PREFIX}/start-test`,
    TEST_RESULT: `${VISION_TEST_PREFIX}/test-result`,
  },
} as const;
