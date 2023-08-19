import React, {ComponentProps} from 'react';

import {makeStyles} from '../../theme';

import {CheckBox} from '../check-box/CheckBox';

export const RadioButton = (props: ComponentProps<typeof CheckBox>) => {
  const styles = useStyles();

  return (
    <CheckBox testID="btnRadio" {...props} checkboxStyle={styles.checkBox} />
  );
};

const useStyles = makeStyles({
  checkBox: {
    borderRadius: 'full',
  },
});
