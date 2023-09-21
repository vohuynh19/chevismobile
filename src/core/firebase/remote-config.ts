import remoteConfig from '@react-native-firebase/remote-config';
import {appLog} from '~core/logger';

export type RemoteConfigKeys = keyof typeof defaultConfigValues;

const defaultConfigValues = {
  recommended_app_version: '',
  required_app_version: '',
  apple_store_url: '',
  google_store_url: '',
};

export const initialize = async () => {
  try {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 30000,
    });
    await remoteConfig().setDefaults(defaultConfigValues);
    await remoteConfig().fetchAndActivate();
    appLog.debug('Remote config initialized');
  } catch (error) {
    appLog.error(error, 'Failed to initialize remote config');
  }
};

export const getRemoteConfigValue = (key: RemoteConfigKeys): string =>
  remoteConfig().getValue(key).asString();
