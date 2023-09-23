import React from 'react';
import {signIn, signOut} from '~core/firebase';

import {Button, Screen} from '~core/ui';

const HomeScreen = () => {
  return (
    <Screen topInset backgroundColor="secondary100">
      <Button
        title="Sign in"
        onPress={() =>
          signIn('miyxet@miyxet.com', '123456')
            .catch(e => console.log('e', e))
            .then(res => console.log(res))
        }
      />

      <Button title="Logout" onPress={() => signOut()} />
    </Screen>
  );
};

export default HomeScreen;
