import {ComponentProps, ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {isIos} from '../../utils/platform';

import {useHeaderDimensions} from '../../hooks';

import {View} from '../view';

interface Props extends ComponentProps<typeof View> {
  height: number;
  illustration: ReactNode;
}

export const HeaderBackgroundIllustration = ({
  height,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  style,
  illustration,
  children,
  ...rest
}: Props) => {
  const {statusBarHeight} = useHeaderDimensions();

  return (
    <View style={{height}} {...rest}>
      {illustration}
      <View
        px={4}
        style={{
          marginTop: statusBarHeight + (isIos() ? 8 : 16) || 24,
          ...StyleSheet.absoluteFillObject,
        }}>
        {children}
      </View>
    </View>
  );
};
