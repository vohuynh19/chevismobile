import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Platform} from 'react-native';
import Tts from 'react-native-tts';

import {INDO_ENGLISH_CODE} from '../config';

const useTextToSpeech = () => {
  const speechQueue = useRef([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    Tts.setDefaultLanguage(INDO_ENGLISH_CODE);
    Tts.setDefaultRate(0.4);

    const startEvent = Tts.addEventListener('tts-start', event => {
      setIsSpeaking(true);
    });

    const finishEvent = Tts.addEventListener('tts-finish', ({utteranceId}) => {
      setIsSpeaking(false);
      handleCallback(utteranceId);
      handleRemoveEntity(utteranceId);
    });

    return () => {
      startEvent.remove();
      finishEvent.remove();
    };
  }, []);

  const handleCallback = utteranceId => {
    speechQueue.current.filter(({id}) => id === utteranceId)?.[0]?.callback?.();
  };

  const handleRemoveEntity = utteranceId => {
    speechQueue.current = speechQueue.current.filter(
      ({id}) => id !== utteranceId,
    );
  };

  const speak = useCallback(async (speech, callback) => {
    let utteranceId;
    if (Platform.OS === 'ios') {
      utteranceId = await Tts.speak(speech, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
      });
    } else {
      utteranceId = await Tts.speak(speech);
    }

    speechQueue.current.push({id: utteranceId, callback, isFinished: false});
    return utteranceId;
  }, []);

  const stop = Tts.stop;

  useFocusEffect(
    useCallback(() => {
      return () => {
        Tts.stop();
      };
    }, []),
  );

  return {speechQueue: speechQueue.current, speak, stop, isSpeaking};
};

export default useTextToSpeech;
