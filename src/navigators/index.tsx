import React from 'react';
import {useAuthState} from '~core/firebase';

import AuthStackScreen from './auth';
import EmployeeStackScreen from './employee';
/**
 * Define all of group of stack in this component
 */
const RootStackScreen = () => {
  const {authState} = useAuthState();

  if (!authState) {
    return <AuthStackScreen />;
  }

  return <EmployeeStackScreen />;
};

export default RootStackScreen;
