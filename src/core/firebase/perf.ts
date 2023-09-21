import perf, {FirebasePerformanceTypes} from '@react-native-firebase/perf';
import {ScreenPath} from '~navigators/paths';

const perfInstance = perf();

type TraceIdentifier = 'js_bootsplash' | '___';

export const startTrace = async (
  identifier: TraceIdentifier,
): Promise<FirebasePerformanceTypes.Trace> => {
  const trace = await perfInstance.startTrace(identifier);
  return trace;
};

export const startScreenTrace = async (
  identifier: ScreenPath,
): Promise<FirebasePerformanceTypes.ScreenTrace> => {
  const trace = await perfInstance.startScreenTrace(identifier);

  return trace;
};
