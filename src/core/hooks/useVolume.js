import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {VolumeManager} from 'react-native-volume-manager';

const useVolume = onChangeVolume => {
  const [volumeLevel, setVolumeLevel] = useState(0);

  useFocusEffect(
    useCallback(() => {
      VolumeManager.getVolume('music').then(volume => {
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

  const handleChangeVolume = useCallback(value => {
    VolumeManager.setVolume(value);
    setVolumeLevel(value);
  }, []);

  return {volumeLevel, handleChangeVolume};
};

export default useVolume;
