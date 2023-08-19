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
  [SCREEN_PATHS.SPLASH]: NavigatorScreenParams<SplashParams>;
  [SCREEN_PATHS.HOME]: NavigatorScreenParams<HomeParams>;
  [SCREEN_PATHS.VISION_TEST.DEFAULT]: NavigatorScreenParams<VisionStackParams>;
};

export type RootStackScreenProps<T extends keyof RootStackParams> =
  StackScreenProps<RootStackParams, T>;

/**
 * SECOND NAVIGATION LAYER
 *
 * Composite second layer screen params with the connected first layer params in order to typesafe for navigating options.
 */

export type SplashParams = {};
export type SplashScreenProps<T extends keyof SplashParams> =
  CompositeScreenProps<
    StackScreenProps<SplashParams, T>,
    RootStackScreenProps<'/'>
  >;

export type HomeParams = {};
export type HomeScreenProps<T extends keyof HomeParams> = CompositeScreenProps<
  StackScreenProps<HomeParams, T>,
  RootStackScreenProps<'/home'>
>;

export type VisionStackParams = {
  [SCREEN_PATHS.VISION_TEST.HOME]: undefined;
  [SCREEN_PATHS.VISION_TEST.ADJUST_SOUND]: undefined;
  [SCREEN_PATHS.VISION_TEST.CHECK_CONDITION]: undefined;
  [SCREEN_PATHS.VISION_TEST.ILLUSTRATION]: undefined;
  [SCREEN_PATHS.VISION_TEST.START_TEST]: undefined;
  [SCREEN_PATHS.VISION_TEST.TEST_RESULT]: undefined;
};
export type VisionScreenProps<T extends keyof VisionStackParams> =
  CompositeScreenProps<
    StackScreenProps<VisionStackParams, T>,
    RootStackScreenProps<'/vision-test'>
  >;
