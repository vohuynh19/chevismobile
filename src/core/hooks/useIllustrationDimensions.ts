import {useWindowDimensions} from 'react-native';

import {breakpoints} from '../theme/primitives';

export const useIllustrationDimensions = (small: number, large: number) => {
  const {width, height} = useWindowDimensions();

  if (height < breakpoints.largePhone.height) {
    return {width, height: small};
  }

  return {width, height: large};
};
