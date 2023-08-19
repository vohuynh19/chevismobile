import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {LayoutChangeEvent} from 'react-native';

import {Theme} from '../../theme';
import {View} from '../view';

export const BottomDashedLine = ({
  gap = 2,
  dashLength = 4,
  thickness = 1,
  dashColor = 'primary300',
  children,
}: {
  gap?: number;
  dashLength?: number;
  thickness?: number;
  dashColor?: keyof Theme['colors'];
  children: ReactNode;
}) => {
  const [lineLength, setLineLength] = useState(0);
  const numOfDashes = Math.ceil(lineLength / (gap + dashLength));

  const dashStyles = useMemo(
    () => ({
      width: dashLength,
      height: thickness,
      marginRight: gap,
      marginBottom: 0,
      marginTop: 2,
    }),
    [gap, dashLength, thickness],
  );

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setLineLength(e.nativeEvent.layout.width);
  }, []);

  return (
    <>
      {Children.map(children, child =>
        cloneElement(child as ReactElement, {onLayout}),
      )}
      <View flexDirection="row">
        {[...Array(numOfDashes)].map((_, i) => (
          <View key={i} style={dashStyles} backgroundColor={dashColor} />
        ))}
      </View>
    </>
  );
};
