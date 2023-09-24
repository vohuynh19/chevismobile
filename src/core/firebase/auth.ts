import auth from '@react-native-firebase/auth';

export const signIn = (payload: {email: string; password: string}) => {
  return auth().signInWithEmailAndPassword(payload.email, payload.password);
};

export const signOut = () => auth().signOut();
