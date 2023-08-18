import {ReactElement, useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {initialize as initializeI18n} from '~core/i18n';
import {appLog} from '~core/logger';

import SplashScreen from './SplashScreen';

interface Props {
  children: ReactElement;
}

const AppInitializer = ({children}: Props) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    /**
     * Init stores and fetch user information before init app
     */
    const init = async () => {
      try {
        await initializeI18n();

        setInitialized(true);
        RNBootSplash.hide({fade: true});
      } catch (err) {
        appLog.error(err, 'App initialized has error');
      }
    };
    init();
  }, []);

  if (initialized) {
    return <>{children}</>;
  }

  return <SplashScreen />;
};

export default AppInitializer;
