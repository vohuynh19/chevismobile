import auth from '@react-native-firebase/auth';

export const signIn = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => auth().signOut();
