import React, {ComponentProps, useState} from 'react';
import {
  Image,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerEventPayload,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

interface Props extends ComponentProps<typeof Image> {
  minScale?: number;
  maxScale?: number;
  containerStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
}

export const Zoomer = ({
  style = {},
  imageContainerStyle = {},
  ...props
}: Props) => {
  const [state, setState] = useState({
    canInteract: false,
    centerX: 0,
    centerY: 0,
    width: 0,
    height: 0,
  });

  const {canInteract} = state;

  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: (event: PinchGestureHandlerEventPayload) => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onFinish: () => {
        scale.value = withTiming(1);
      },
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: focalX.value},
      {translateY: focalY.value},
      // { translateX: -state.width / 2 },
      // { translateY: -state.height / 2 },
      {scale: scale.value},
    ],
  }));

  const onLayout = ({
    nativeEvent: {
      layout: {x, y, width, height},
    },
  }: LayoutChangeEvent) => {
    setState(current => ({
      ...current,
      canInteract: true,
      centerX: x + width / 2,
      centerY: y + height / 2,
      width,
      height,
    }));
  };

  const focalStyle = useAnimatedStyle(() => ({
    transform: [{translateX: focalX.value}, {translateY: focalY.value}],
  }));

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler} enabled={canInteract}>
      <Animated.View
        onLayout={onLayout}
        style={[styles.content, imageContainerStyle]}>
        <AnimatedImage
          style={[styles.container, style, animatedStyle]}
          {...props}
        />
        <Animated.View style={[styles.focalPoint, focalStyle]} />
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexGrow: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
