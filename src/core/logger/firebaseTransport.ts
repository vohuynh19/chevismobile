import {transportFunctionType} from 'react-native-logs';
import {crashLog, crashRecrodError} from '~core/firebase';

export const firebaseTransport: transportFunctionType = props => {
  const msg = props.msg as string;
  const {rawMsg, level} = props;
  if (!props) {
    return false;
  }

  if (level.severity === 3 || level.text === 'error') {
    if (Array.isArray(rawMsg)) {
      const [error, ...rest] = rawMsg;
      if (rest.length) {
        crashLog(JSON.stringify(rest, null, 2));
      }
      crashRecrodError(error as Error);
    } else {
      crashRecrodError(rawMsg as Error);
    }
  } else {
    crashLog(`${level.text} - ${msg.trim()}`);
  }

  return true;
};
