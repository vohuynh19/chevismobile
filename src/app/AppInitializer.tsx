import {ReactElement, useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {initialize as initializeI18n} from '~core/i18n';
import {appLog} from '~core/logger';
import remoteConfig from '@react-native-firebase/remote-config';

import SplashScreen from './SplashScreen';
import {useAppStore} from '~core/store/app';

interface Props {
  children: ReactElement;
}

const AppInitializer = ({children}: Props) => {
  const [initialized, setInitialized] = useState(false);

  const {setFeatures} = useAppStore();

  useEffect(() => {
    /**
     * Init stores and fetch user information before init app
     */
    const init = async () => {
      try {
        await initializeI18n();

        remoteConfig()
          .fetch(300)
          .then(() => remoteConfig().activate())
          .then(() => remoteConfig().getValue('features'))
          .then((snapshot: any) => {
            const data = JSON.parse(snapshot._value);
            setFeatures(data);
          });

        setInitialized(true);
        RNBootSplash.hide({fade: true});
      } catch (err) {
        appLog.error(err, 'App initialized has error');
      }
    };
    init();
  }, [setFeatures]);

  if (initialized) {
    return <>{children}</>;
  }

  return <SplashScreen />;
};

export default AppInitializer;
