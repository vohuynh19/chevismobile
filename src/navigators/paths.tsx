/**
 * All configurations will be put in this file to avoid circular importing
 */

type LeafValues<T> = T extends object
  ? {[K in keyof T]: LeafValues<T[K]>}[keyof T]
  : T;

export type ScreenPath = LeafValues<typeof SCREEN_PATHS>;

export const SCREEN_PATHS = {
  AUTH: {
    __NAME__: '/auth',
    LOGIN: '/auth/login',
  },
  HOST: {
    __NAME__: '/host',
    HOME: '/host/home',
    HISTORY: '/host/history',
  },
  EMPLOYEE: {
    __NAME__: '/employee',
    HOME: '/employee/home',
    ORDER: '/employee/order',
    ORDER_HISTORY: '/employee/order-history',
    PAYMENT: {
      __NAME__: '/employee/payment',
      BANKING: '/employee/payment/banking',
      CASH: '/employee/payment/cash',
      MOMO: '/employee/payment/momo',
    },
  },
  MANAGER: {
    __NAME__: '/manager',
  },
  COMMON: {
    __NAME__: '/common',
    CAMERA_CAPTURE: '/common/camera-capture',
  },

  // DASHBOARD: {
  //   __NAME__: 'dashboard',

  //   HOME: `${'dashboard'}/home`,
  //   PROFILE: {
  //     __NAME__: `${'dashboard'}${PROFILE_PREFIX}`,
  //     HOME: `${'dashboard'}${PROFILE_PREFIX}/home`,
  //     UPDATE_PROFILE: `${'dashboard'}${PROFILE_PREFIX}/update-profile`,
  //     SETTINGS: `${'dashboard'}${PROFILE_PREFIX}/settings`,
  //   },
  //   HISTORY: {
  //     __NAME__: `${'dashboard'}${HISTORY_PREFIX}`,
  //     OVERVIEW: `${'dashboard'}${HISTORY_PREFIX}/overview`,
  //   },

  //   ORDER: {
  //     __NAME__: `${'dashboard'}${ORDER_PREFIX}`,
  //     ADD_ORDER: `${'dashboard'}${ORDER_PREFIX}/add-order`,
  //     ORDER_PAYMENT: `${'dashboard'}${ORDER_PREFIX}/order-payment`,
  //   },
  // },
  // VISION_TEST: {
  //   __NAME__: VISION_TEST_PREFIX,

  //   HOME: `${VISION_TEST_PREFIX}/home`,
  //   ADJUST_SOUND: `${VISION_TEST_PREFIX}/adjust-sound`,
  //   ILLUSTRATION: `${VISION_TEST_PREFIX}/illustration`,
  //   CHECK_CONDITION: `${VISION_TEST_PREFIX}/check-condition`,
  //   START_TEST: `${VISION_TEST_PREFIX}/start-test`,
  //   TEST_COMPLETED: `${VISION_TEST_PREFIX}/test-completed`,
  //   VIEW_RESULT: `${VISION_TEST_PREFIX}/view-result`,
  // },
} as const;
