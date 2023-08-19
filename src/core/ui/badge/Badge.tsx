import {ReactNode} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {Text} from '../text/Text';
import {View} from '../view/View';
import {makeStyles} from '../../theme';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Badge = ({children, style, textStyle}: Props) => {
  const styles = useStyles();

  return (
    <View style={[styles.badge, style]}>
      <Text style={[styles.text, textStyle]} numberOfLines={1}>
        {children}
      </Text>
    </View>
  );
};

const useStyles = makeStyles(({theme}) => ({
  badge: {
    bg: 'secondary100',
    px: 2,
    minWidth: 24,
    minHeight: 24,
    borderRadius: 'full',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...theme.textVariants.bodySmallBold,
  },
}));
