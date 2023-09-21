import crashlytics from '@react-native-firebase/crashlytics';

export const crashLog = (message: string) => crashlytics().log(message);

export const crashRecrodError = (error: Error) =>
  crashlytics().recordError(error);

export const setCrashUserId = (userId: string) =>
  crashlytics().setUserId(`${userId}`);
