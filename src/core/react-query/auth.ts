import {useMutation} from '@tanstack/react-query';
import {signIn, signOut} from '~core/firebase';

export const useLogin = () => {
  const {mutateAsync, isLoading, error} = useMutation(signIn);
  return {
    login: mutateAsync,
    isLoading,
    error,
  };
};

export const useLogout = () => {
  const {mutateAsync, isLoading, error} = useMutation(signOut);
  return {
    logout: mutateAsync,
    isLoading,
    error,
  };
};
