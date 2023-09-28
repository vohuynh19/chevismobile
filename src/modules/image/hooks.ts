import storage from '@react-native-firebase/storage';
import {useMutation} from '@tanstack/react-query';

import {showErrorMessage} from '~core/utils';

const uploadImageToStorage = async ({
  path,
  name,
}: {
  path: string;
  name: string;
}) => {
  try {
    const reference = storage().ref(name);
    await reference.putFile(path);
  } catch (error) {
    showErrorMessage('Upload image fail, please try again');
  }
};

export const useUploadImage = () => {
  const {mutateAsync, isLoading, error} = useMutation(uploadImageToStorage);
  return {
    upload: mutateAsync,
    isLoading,
    error,
  };
};
