import storage from '@react-native-firebase/storage';
import {useMutation} from '@tanstack/react-query';
import {useState} from 'react';

import {showErrorMessage} from '~core/utils';

export const useUploadImage = () => {
  const [percent, setPercent] = useState<number | undefined>(undefined);

  const uploadImageToStorage = ({path, name}: {path: string; name: string}) =>
    new Promise<string>((resolve, reject) => {
      try {
        const reference = storage().ref(name);
        const uploadTask = reference.putFile(path);
        uploadTask.on(
          'state_changed',
          snapshot => {
            setPercent(snapshot.bytesTransferred / snapshot.totalBytes);
          },
          error => {
            setPercent(undefined);
            showErrorMessage('Upload image fail, please try again');
            reject(error);
          },
          async () => {
            setPercent(undefined);
            const url = await uploadTask.snapshot?.ref.getDownloadURL();
            resolve(url || '');
          },
        );
      } catch (err) {
        setPercent(undefined);
        showErrorMessage('Upload image fail, please try again');
        reject(err);
      }
    });

  const {mutateAsync, isLoading, error} = useMutation(uploadImageToStorage);

  return {
    percent,
    upload: mutateAsync,
    isLoading,
    error,
  };
};
