import {configLoggerType, logger as rnLogger} from 'react-native-logs';
import {isTest} from '~core/utils/platform';

const config: configLoggerType = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3, // errors are sent to crashlytics
  },
  severity: isTest() ? 'error' : 'debug',
  // transport: getTransport(),
  transportOptions: {
    // https://github.com/onubo/react-native-logs#available-colors
    colors: {
      debug: 'white',
      info: 'white',
      warn: 'yellowBright',
      error: 'redBright',
    },
    extensionColors: {
      app: 'grey',
      api: 'green',
      auth: 'magenta',
      id: 'cyan',
      nav: 'blue',
    },
  },
  enabledExtensions: ['app', 'api', 'auth', 'nav', 'scanbot', 'id'],
  async: false,
  printDate: false,
  printLevel: false,
};

export const log = rnLogger.createLogger<'debug' | 'info' | 'warn' | 'error'>(
  config,
);

export const appLog = log.extend('app');
export const apiLog = log.extend('api');
export const authLog = log.extend('auth');
export const navLog = log.extend('nav');
