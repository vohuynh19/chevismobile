import {ComponentProps, forwardRef} from 'react';

import {View, ViewRef} from '../view/View';
import {FormLabel} from './FormLabel';

const FormItemCmp = forwardRef<ViewRef, ComponentProps<typeof View>>(
  ({children, ...rest}, ref) => (
    <View mb={6} {...rest} ref={ref}>
      {children}
    </View>
  ),
);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757
export const FormItem = Object.assign(FormItemCmp, {
  Label: FormLabel,
});
