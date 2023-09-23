/**
 * All configurations will be put in this file to avoid circular importing
 */

type LeafValues<T> = T extends object
  ? {[K in keyof T]: LeafValues<T[K]>}[keyof T]
  : T;

export type ScreenPath = LeafValues<typeof SCREEN_PATHS>;

const VISION_TEST_PREFIX = '/vision-test';
const AUTH_PREFIX = '/auth';
const DASHBOARD_PREFIX = '/dashboard';
const PROFILE_PREFIX = '/profile';
const HISTORY_PREFIX = '/history';

export const SCREEN_PATHS = {
  AUTH: {
    __NAME__: AUTH_PREFIX,
    LOGIN: `${AUTH_PREFIX}/login`,
  },
  DASHBOARD: {
    __NAME__: DASHBOARD_PREFIX,

    HOME: `${DASHBOARD_PREFIX}/home`,
    PROFILE: {
      __NAME__: `${DASHBOARD_PREFIX}${PROFILE_PREFIX}`,
      HOME: `${DASHBOARD_PREFIX}${PROFILE_PREFIX}/home`,
      UPDATE_PROFILE: `${DASHBOARD_PREFIX}${PROFILE_PREFIX}/update-profile`,
      SETTINGS: `${DASHBOARD_PREFIX}${PROFILE_PREFIX}/settings`,
    },
    HISTORY: {
      __NAME__: `${DASHBOARD_PREFIX}${HISTORY_PREFIX}`,
      OVERVIEW: `${DASHBOARD_PREFIX}${HISTORY_PREFIX}/overview`,
    },
  },
  VISION_TEST: {
    __NAME__: VISION_TEST_PREFIX,

    HOME: `${VISION_TEST_PREFIX}/home`,
    ADJUST_SOUND: `${VISION_TEST_PREFIX}/adjust-sound`,
    ILLUSTRATION: `${VISION_TEST_PREFIX}/illustration`,
    CHECK_CONDITION: `${VISION_TEST_PREFIX}/check-condition`,
    START_TEST: `${VISION_TEST_PREFIX}/start-test`,
    TEST_COMPLETED: `${VISION_TEST_PREFIX}/test-completed`,
    VIEW_RESULT: `${VISION_TEST_PREFIX}/view-result`,
  },
} as const;
