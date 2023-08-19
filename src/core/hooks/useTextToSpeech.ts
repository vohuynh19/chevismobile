import {useCallback, useEffect, useRef, useState} from 'react';
import {Platform} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Tts from 'react-native-tts';

type SpeechQuereType = {
  id: string | number;
  callback: Function;
  isFinished: boolean;
};

const useTextToSpeech = () => {
  const speechQueue = useRef<SpeechQuereType[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    Tts.setDefaultLanguage('en-ID');
    Tts.setDefaultRate(0.4);

    const startEvent: any = Tts.addEventListener('tts-start', _ => {
      setIsSpeaking(true);
    });

    const finishEvent: any = Tts.addEventListener(
      'tts-finish',
      ({utteranceId}) => {
        setIsSpeaking(false);
        handleCallback(utteranceId);
        handleRemoveEntity(utteranceId);
      },
    );

    return () => {
      startEvent.remove();
      finishEvent.remove();
    };
  }, []);

  const handleCallback = (utteranceId: string | number) => {
    speechQueue.current.filter(({id}) => id === utteranceId)?.[0]?.callback?.();
  };

  const handleRemoveEntity = (utteranceId: string | number) => {
    speechQueue.current = speechQueue.current.filter(
      ({id}) => id !== utteranceId,
    );
  };

  const speak = useCallback(async (speech: string, callback: Function) => {
    let utteranceId;
    if (Platform.OS === 'ios') {
      utteranceId = await Tts.speak(speech, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
        androidParams: {
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
          KEY_PARAM_VOLUME: 1,
          KEY_PARAM_PAN: 0,
        },
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
