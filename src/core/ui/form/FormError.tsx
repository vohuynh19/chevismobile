import {ComponentProps} from 'react';

import {Text} from '../text/Text';

export const FormError = ({
  message,
  ...rest
}: ComponentProps<typeof Text> & {message?: string}) => {
  if (!message) {
    return null;
  }
  return (
    <Text variant="caption" color="error500" m={1} {...rest}>
      {message}
    </Text>
  );
};
