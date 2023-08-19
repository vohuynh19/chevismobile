import {ComponentProps, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

import {AllRestyleProps} from '../../theme';
import {Button} from '../button/Button';
import {Icon} from '../icon';
import {Text} from '../text/Text';
import {View} from '../view/View';

type BannerVariant = 'info' | 'error' | 'warn';

interface Props extends ComponentProps<typeof View> {
  variant?: BannerVariant;
  text: ReactNode;
  onClose?: () => void;
  onPress?: () => void;
}

export const Banner = ({
  variant = 'info',
  text,
  onClose,
  onPress,
  ...viewProps
}: Props) => {
  const banner = (
    <View
      padding={4}
      borderRadius="lg"
      flexDirection="row"
      alignItems="center"
      {...bannerStyles[variant].container}
      {...viewProps}>
      <Icon {...iconProps[variant]} />
      <Text
        accessible={!!onClose}
        variant="bodySmall"
        mx={3}
        flex={1}
        {...bannerStyles[variant].text}>
        {text}
      </Text>
      {(Boolean(onClose) || Boolean(onPress)) && (
        <Button
          accessible={!!onClose}
          testID="btnCloseBanner"
          hitSlop={8}
          variant="unstyled"
          icon={
            <Icon
              {...iconProps[variant]}
              name={onPress ? 'ChevronRight' : 'Close'}
            />
          }
          size="s"
          onPress={onClose}
        />
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {banner}
      </TouchableOpacity>
    );
  }

  return banner;
};

const iconProps: Record<BannerVariant, ComponentProps<typeof Icon>> = {
  info: {
    name: 'Idea',
    color: 'primary900',
  },
  error: {
    name: 'Warning1',
    color: 'error500',
  },
  warn: {
    name: 'Warning1',
    color: 'warning500',
  },
};

const bannerStyles: Record<
  BannerVariant,
  {text: AllRestyleProps; container: AllRestyleProps}
> = {
  info: {
    container: {
      backgroundColor: 'primary100',
    },
    text: {
      color: 'primary900',
    },
  },
  error: {
    container: {
      backgroundColor: 'error50',
    },
    text: {
      color: 'error900',
    },
  },
  warn: {
    container: {
      backgroundColor: 'warning50',
    },
    text: {
      color: 'error900',
    },
  },
};
