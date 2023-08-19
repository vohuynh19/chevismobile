import {ComponentProps} from 'react';
import {useTranslation} from 'react-i18next';

import {Text} from '../text/Text';
import {View} from '../view/View';

const textProps: ComponentProps<typeof Text> = {
  variant: 'bodySmall',
  color: 'primary900',
};

export const FormLabel = ({
  children,
  required,
  ...rest
}: ComponentProps<typeof Text> & {required?: boolean}) => {
  const {t} = useTranslation();

  if (required) {
    return (
      <View flexDirection="row" justifyContent="space-between" mb={2}>
        <Text {...textProps} {...rest}>
          {children}
        </Text>
        <Text {...textProps} color="neutralLavender700">
          {t('label.required')}
        </Text>
      </View>
    );
  }

  return (
    <Text mb={2} {...textProps} {...rest}>
      {children}
    </Text>
  );
};
