import React from 'react';
import {useAuthState} from '~core/firebase';

import AuthStackScreen from './auth';
// import HostStack from './host';
// import ManagerStack from './manager';
import EmployeeStackScreen from './employee';

/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  const {authState} = useAuthState();

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
