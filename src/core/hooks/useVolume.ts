import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {VolumeManager} from 'react-native-volume-manager';

const useVolume = (onChangeVolume: (volume: number) => void) => {
  const [volumeLevel, setVolumeLevel] = useState(0);

  useFocusEffect(
    useCallback(() => {
      VolumeManager.getVolume().then(({volume}) => {
        setVolumeLevel(volume);
      });

      const volumeListener = VolumeManager.addVolumeListener(result => {
        setVolumeLevel(result.volume);
      });

      return () => {
        volumeListener.remove();
      };
    }, []),
  );

  useEffect(() => {
    onChangeVolume?.(volumeLevel);
  }, [volumeLevel, onChangeVolume]);

  const handleChangeVolume = useCallback((value: number) => {
    VolumeManager.setVolume(value);
    setVolumeLevel(value);
  }, []);

  return {volumeLevel, handleChangeVolume};
};

export default useVolume;
