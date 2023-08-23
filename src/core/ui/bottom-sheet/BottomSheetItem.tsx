import {ComponentProps} from 'react';

import {Button} from '../button';
import {Icon} from '../icon';
import {makeStyles} from '../../theme';

export const BottomSheetItem = ({
  style,
  leftIconStyle,
  textStyle,
  negative,
  ...props
}: ComponentProps<typeof Button> & {negative?: boolean}) => {
  const styles = useStyles();

  return (
    <Button
      variant="tertiary"
      style={[styles.button, style]}
      leftIconStyle={[styles.icon, leftIconStyle]}
      {...(negative && {leftIcon: <Icon name="Delete" color="error500" />})}
      textStyle={[styles.text, textStyle, negative && styles.negativeText]}
      {...props}
    />
  );
};

const useStyles = makeStyles(({theme}) => ({
  button: {
    justifyContent: 'flex-start',
  },
  text: {
    color: 'primary900',
    ...theme.textVariants.bodyMedium,
  },
  icon: {
    marginRight: 3,
  },
  negativeText: {
    color: 'error500',
  },
}));
