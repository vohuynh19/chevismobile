import Toast from 'react-native-simple-toast';

export const showSuccessMessage = (message: string) =>
  Toast.show(message, Toast.CENTER);

export const showErrorMessage = (message: string) =>
  Toast.show(message, Toast.CENTER);
