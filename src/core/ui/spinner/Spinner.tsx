import {ComponentProps} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native';

import {useTheme} from '../../theme';

import {Center} from '../center/Center';

interface Props extends ComponentProps<typeof ActivityIndicator> {
  centered?: boolean;
}

export const Spinner = ({centered, ...props}: Props) => {
  const theme = useTheme();
  const {t} = useTranslation();

  if (centered) {
    return (
      <Center accessibilityLabel={t('components.spinner.a11y.spinnerLabel')}>
        <ActivityIndicator
          color={theme.colors.primary800}
          animating
          {...props}
        />
      </Center>
    );
  }

  return (
    <ActivityIndicator color={theme.colors.primary800} animating {...props} />
  );
};
