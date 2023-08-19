import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {makeStyles} from '../../theme';

import {View} from '../view/View';

interface Props {
  segments: string[];
  currentIndex: number;
  onChange: (currentIndex: number) => void;
  wrapperStyle?: ViewStyle;
  segmentStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  horizontalSpacing?: number;
}

const DEFAULT_SPRING_CONFIG = {
  stiffness: 150,
  damping: 20,
  mass: 1,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const segmentMargin = 2;
const paddingHorizontal = 16;

export const SegmentedControl = ({
  segments,
  currentIndex,
  onChange,
  wrapperStyle,
  segmentStyle,
  containerStyle,
  horizontalSpacing = paddingHorizontal,
}: Props) => {
  const styles = useStyles();
  const [width, setWidth] = useState(0);
  const tabTranslateValue = useSharedValue(0);

  const translateValue = (width - horizontalSpacing * 2) / segments.length;
  useEffect(() => {
    tabTranslateValue.value = withSpring(
      currentIndex * translateValue,
      DEFAULT_SPRING_CONFIG,
    );
  }, [currentIndex, tabTranslateValue, translateValue]);

  const translateStyle = useAnimatedStyle(() => ({
    transform: [{translateX: tabTranslateValue.value}],
  }));

  return (
    <View
      style={[
        {
          paddingHorizontal: horizontalSpacing,
        },
        containerStyle,
      ]}
      onLayout={e => {
        setWidth(e.nativeEvent.layout.width);
      }}>
      <Animated.View style={[styles.wrapper, wrapperStyle]}>
        <Animated.View
          style={[
            styles.movingSegment,
            StyleSheet.absoluteFill,
            {
              width:
                (width - horizontalSpacing * 2 - segmentMargin * 4) /
                segments.length,
              margin: segmentMargin,
            },
            translateStyle,
          ]}
        />
        {segments.map((segment, index) => (
          <Pressable
            onPress={() => onChange(index)}
            key={segment}
            style={[styles.segment, segmentStyle]}>
            <Animated.Text
              style={[
                styles.segmentText,
                currentIndex === index
                  ? styles.activeSegmentText
                  : styles.inactiveSegmentText,
              ]}>
              {segment}
            </Animated.Text>
          </Pressable>
        ))}
      </Animated.View>
    </View>
  );
};

const useStyles = makeStyles(({theme}) => ({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 'lg',
    bg: 'primary100',
  },
  movingSegment: {
    borderRadius: 'lg',
    backgroundColor: 'white',
  },
  segment: {
    flex: 1,
    paddingVertical: 2,
  },
  segmentText: {
    textAlign: 'center',
    ...theme.textVariants.bodySmallMedium,
  },
  activeSegmentText: {
    color: 'primary800',
  },
  inactiveSegmentText: {
    color: 'primary900',
  },
}));
