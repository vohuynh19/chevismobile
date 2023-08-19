import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';

const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setIsFocus(true);
      return () => setIsFocus(false);
    }, []),
  );
  return {isFocus};
};

export default useFocus;
