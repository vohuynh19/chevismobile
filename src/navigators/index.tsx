import React from 'react';
import {useAuthState} from '~core/firebase';

import AuthStack from './auth';
// import HostStack from './host';
// import ManagerStack from './manager';
import EmployeeStack from './employee';

/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  const {authState} = useAuthState();

  if (!authState) {
    return <AuthStack />;
  }

  //   if (authState.email === 'miyxet@miyxet.com') {
  //     return <HostStack />;
  //   }

  //   if (authState.email) {
  //     return <ManagerStack />;
  //   }

  return <EmployeeStack />;
};

export default RootStackScreen;
