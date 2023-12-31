import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

import {SCREEN_PATHS} from './paths';

/**
 * ROOT NAVIGATION LAYER
 */

export type RootStackParams = {
  [SCREEN_PATHS.DASHBOARD
    .__NAME__]: NavigatorScreenParams<DashboardStackParams>;
  [SCREEN_PATHS.VISION_TEST.__NAME__]: NavigatorScreenParams<VisionStackParams>;
};

export type RootStackScreenProps<T extends keyof RootStackParams> =
  StackScreenProps<RootStackParams, T>;

/**
 * MINOR NAVIGATION LAYER
 *
 * Composite second layer screen params with the connected first layer params in order to typesafe for navigating options.
 */

export type DashboardStackParams = {
  [SCREEN_PATHS.DASHBOARD.HOME]: undefined;
  [SCREEN_PATHS.DASHBOARD.PROFILE.__NAME__]: undefined;

  /**
   * Exception for changing stack
   */
  [SCREEN_PATHS.VISION_TEST.__NAME__]: undefined;
};
export type DashboardScreenProps<T extends keyof DashboardStackParams> =
  CompositeScreenProps<
    StackScreenProps<DashboardStackParams, T>,
    RootStackScreenProps<'/vision-test'>
  >;

// -------------------------

export type VisionStackParams = {
  [SCREEN_PATHS.VISION_TEST.HOME]: undefined;
  [SCREEN_PATHS.VISION_TEST.ADJUST_SOUND]: undefined;
  [SCREEN_PATHS.VISION_TEST.CHECK_CONDITION]: undefined;
  [SCREEN_PATHS.VISION_TEST.ILLUSTRATION]: undefined;
  [SCREEN_PATHS.VISION_TEST.START_TEST]: undefined;
  [SCREEN_PATHS.VISION_TEST.TEST_COMPLETED]: undefined;
  [SCREEN_PATHS.VISION_TEST.VIEW_RESULT]: undefined;
};
export type VisionScreenProps<T extends keyof VisionStackParams> =
  CompositeScreenProps<
    StackScreenProps<VisionStackParams, T>,
    RootStackScreenProps<'/dashboard'>
  >;

// -------------------------

export type ProfileStackParams = {
  [SCREEN_PATHS.DASHBOARD.PROFILE.HOME]: undefined;
  [SCREEN_PATHS.DASHBOARD.PROFILE.SETTINGS]: undefined;
  [SCREEN_PATHS.DASHBOARD.PROFILE.UPDATE_PROFILE]: undefined;
};

export type ProfileScreenProps<T extends keyof ProfileStackParams> =
  CompositeScreenProps<
    StackScreenProps<ProfileStackParams, T>,
    RootStackScreenProps<'/dashboard'>
  >;
