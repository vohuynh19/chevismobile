import React from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  KeyboardAvoidingView as KeyboardAvoidingViewComponent,
  KeyboardAvoidingViewProps,
} from 'react-native';

import {makeStyles} from '../../theme';

export const KeyboardAvoidingView = ({
  style,
  ...props
}: KeyboardAvoidingViewProps) => {
  const styles = useStyles();

  return (
    <KeyboardAvoidingViewComponent
      style={[styles.keyboardAvoidingView, style]}
      {...props}
    />
  );
};

const useStyles = makeStyles({
  keyboardAvoidingView: {
    flexGrow: 1,
  },
});
