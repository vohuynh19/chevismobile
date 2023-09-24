import React from 'react';
import {useLogout} from '~core/react-query';

import {Button, Screen} from '~core/ui';

const HomeScreen = () => {
  const {logout} = useLogout();

  return (
    <Screen topInset backgroundColor="secondary100">
      <Button title="Logout" onPress={() => logout()} />
    </Screen>
  );
};

export default HomeScreen;
