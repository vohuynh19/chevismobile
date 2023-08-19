import {useFocusEffect} from '@react-navigation/native';
import {useState, useCallback} from 'react';

const useCounter = (
  initNumber = 0,
  isCountDown = true,
  stopValue = 0,
  countOnInit = true,
) => {
  const [counter, setCounter] = useState(initNumber);
  const [isCountOnInit, setIsCountOnInit] = useState(countOnInit);

  useFocusEffect(
    useCallback(() => {
      if (isCountOnInit) {
        const interval = setInterval(() => {
          setCounter(prev => {
            if (prev === stopValue) {
              return prev;
            }
            return isCountDown ? prev - 1 : prev + 1;
          });
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      }
    }, [isCountOnInit, isCountDown, stopValue]),
  );

  const reset = useCallback(() => {
    setCounter(initNumber);
    setIsCountOnInit(countOnInit);
  }, [countOnInit, initNumber]);

  const triggerCount = useCallback(() => {
    !isCountOnInit && setIsCountOnInit(true);
  }, [isCountOnInit]);

  return {counter, reset, triggerCount, setCounter};
};

export default useCounter;
