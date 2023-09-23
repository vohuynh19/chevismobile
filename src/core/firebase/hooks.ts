import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

export const useAuthState = () => {
  const [authState, setAuthState] = useState<FirebaseAuthTypes.User | null>(
    auth().currentUser,
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(newAuthState => {
      setAuthState(newAuthState);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  return {authState};
};
