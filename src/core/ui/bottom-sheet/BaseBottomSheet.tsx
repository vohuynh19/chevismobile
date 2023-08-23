import type {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AllRestyleProps, useTheme} from '../../theme';
import {View} from '../view';

export interface BottomSheetModalProps extends AllRestyleProps {
  children?: ReactNode;
  extraBottomInset?: boolean;
}

export const BaseBottomSheet = ({
  children,
  extraBottomInset,
  ...restyleProps
}: BottomSheetModalProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      flex={1}
      px={2}
      pt={10}
      style={{
        paddingBottom:
          insets.bottom + (extraBottomInset ? 16 : 0) || theme.spacing[4],
      }}
      {...restyleProps}>
      {children}
    </View>
  );
};
