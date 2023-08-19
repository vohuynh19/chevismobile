import {ComponentProps} from 'react';
import {StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useTheme} from '../../theme';

import {View} from '../view/View';

interface ScreenProps extends ComponentProps<typeof View> {
  topInset?: boolean;
  bottomInset?: boolean;
  extraBottomInset?: boolean;
}

export const Screen = ({
  children,
  topInset = false,
  bottomInset = true,
  extraBottomInset = false,
  backgroundColor = 'neutralLavender200',
  style,
  ...props
}: ScreenProps) => {
  const theme = useTheme();
  const inset = useSafeAreaInsets();

  const viewStyle = [
    {
      flex: 1,
      ...((bottomInset || extraBottomInset) && {
        paddingBottom:
          bottomInset || extraBottomInset
            ? inset.bottom + (extraBottomInset ? 16 : 0) || theme.spacing[4]
            : 0,
      }),
      ...(topInset && {
        paddingTop: topInset ? inset.top || theme.spacing[6] : 0,
      }),
    },
    style,
  ];

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View backgroundColor={backgroundColor} style={viewStyle} {...props}>
        {children}
      </View>
    </>
  );
};
