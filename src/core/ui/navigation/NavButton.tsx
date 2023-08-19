import React, {ComponentProps, ReactNode} from 'react';
import {useTranslation} from 'react-i18next';
import {useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Icon, IconName, Text} from '..';
import {makeStyles} from '../../theme';

interface Props extends ComponentProps<typeof Button> {
  onPress?: () => void;
  children?: ReactNode;
  iconName?: IconName;
  accessibilityHint?: string;
  accessibilityLabel?: string;
}

const horizontalPadding = 16 * 2;
const iconWidth = 28;
const spaceBetweenIconAndText = 16;

export const NavButton = ({
  onPress,
  iconName = 'ArrowLeft',
  children,
  style,
  accessibilityHint,
  accessibilityLabel,
  ...rest
}: Props) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const styles = useStyles();

  return (
    <Button
      accessibilityLabel={accessibilityLabel || t('action.back')}
      accessibilityHint={
        accessibilityHint || t('navigation.a11y.navButtonBackHint')
      }
      testID="btnNavigation"
      style={[styles.button, style]}
      variant="unstyled"
      leftIcon={<Icon name={iconName} size={iconWidth} />}
      leftIconStyle={styles.leftIcon}
      onPress={() => (onPress ? onPress() : navigation.goBack())}
      {...rest}>
      {children}
    </Button>
  );
};

const useStyles = makeStyles({
  leftIcon: {
    marginRight: spaceBetweenIconAndText / 4,
  },
  button: {
    justifyContent: 'flex-start',
  },
});

const NavButtonTitle = ({
  children,
  headerRightWidth = 26,
  ...rest
}: {
  children: ReactNode;
  headerRightWidth?: number;
} & ComponentProps<typeof Text>) => {
  const {width} = useWindowDimensions();

  return (
    <Text
      accessibilityRole="header"
      variant="heading4"
      color="primary900"
      numberOfLines={1}
      style={{
        width:
          width -
          horizontalPadding -
          iconWidth -
          spaceBetweenIconAndText -
          headerRightWidth,
      }}
      {...rest}>
      {children}
    </Text>
  );
};

NavButton.Title = NavButtonTitle;
