import Toast from 'react-native-simple-toast';

interface Messages {
  successMessage?: string;
  errorMessage?: string | ((...args: any[]) => string);
}

export const withMessages =
  <T extends Promise<Awaited<T>>>(fn: T) =>
  async ({successMessage, errorMessage}: Messages = {}) => {
    try {
      const res = await fn;
      if (successMessage) {
        showSuccessMessage(successMessage);
      }
      return res;
    } catch (err) {
      if (errorMessage) {
        showErrorMessage(
          typeof errorMessage === 'function' ? errorMessage(err) : errorMessage,
        );
      }
      throw err;
    }
  };

export const showSuccessMessage = (message: string) =>
  Toast.show(message, Toast.CENTER);

export const showErrorMessage = (message: string) =>
  Toast.show(message, Toast.CENTER);
