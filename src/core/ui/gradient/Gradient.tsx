import {ReactNode} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';

import {View} from '../view/View';

export type Direction = 'leftToRight' | 'topToBottom';

interface Props {
  fromColor: string;
  toColor: string;
  opacityColor1?: number;
  opacityColor2?: number;
  children?: ReactNode;
  direction?: Direction;
}

export function Gradient({
  children,
  fromColor,
  toColor,
  opacityColor1 = 1,
  opacityColor2 = 1,
  direction = 'topToBottom',
}: Props) {
  const gradientUniqueId = `grad${fromColor}+${toColor}`.replace(
    /[^a-zA-Z0-9 ]/g,
    '',
  );
  const {width, height} = useWindowDimensions();

  return (
    <View
      flex={1}
      height={height}
      width={width}
      pointerEvents="none"
      {...StyleSheet.absoluteFillObject}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient
            id={gradientUniqueId}
            x1="0%"
            y1="0%"
            x2={direction === 'topToBottom' ? '0%' : '100%'}
            y2={direction === 'topToBottom' ? '100%' : '0%'}>
            <Stop
              offset="0"
              stopColor={fromColor}
              stopOpacity={opacityColor1}
            />
            <Stop offset="1" stopColor={toColor} stopOpacity={opacityColor2} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill={`url(#${gradientUniqueId})`} />
      </Svg>
      {children}
    </View>
  );
}
