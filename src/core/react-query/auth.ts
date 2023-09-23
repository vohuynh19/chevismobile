import {useMutation} from '@tanstack/react-query';
import {signIn} from '~core/firebase';

type LoginPayload = {email: string; password: string};

const loginRequest = async (
  payload: LoginPayload,
): Promise<ReturnType<typeof signIn>> =>
  signIn(payload.email, payload.password);

export const useLogin = () => {
  const {mutateAsync, isLoading, error} = useMutation(loginRequest);
  return {
    login: mutateAsync,
    isLoading,
    error,
  };
};
