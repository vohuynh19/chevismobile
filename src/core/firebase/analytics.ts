import analytics from '@react-native-firebase/analytics';
import {setCrashUserId} from './crashlytics';

export const setUserId = (userId: string) => {
  if (userId) {
    analytics().setUserId(`${userId}`);
    setCrashUserId(`${userId}`);
  }
};

export const logEvent = (eventName: string, params: Record<string, any>) => {
  analytics().logEvent(eventName, params);
};

export const logScreenView = (screenName: string) => {
  analytics().logScreenView({
    screen_class: screenName,
    screen_name: screenName,
  });
};
