import React, {useEffect} from 'react';
import {useAuthState} from '~core/firebase';

import AuthStackScreen from './auth';
// import HostStack from './host';
// import ManagerStack from './manager';
import EmployeeStackScreen from './employee';
import {appConfig} from '~config';

/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  const {authState} = useAuthState();

  useEffect(() => {
    if (authState) {
      appConfig.isTesting = authState?.email === 'miyxet@miyxet.com';
    }
  }, [authState]);

  if (!authState) {
    return <AuthStackScreen />;
  }

  //   if (authState.email === 'miyxet@miyxet.com') {
  //     return <HostStack />;
  //   }

  //   if (authState.email) {
  //     return <ManagerStack />;
  //   }

  return <EmployeeStackScreen />;
};

export default RootStackScreen;
