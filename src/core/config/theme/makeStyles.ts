import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {useRestyles} from '@shopify/restyle';

import {allRestyleFunctions, AllRestyleProps} from './restyle';
import {Theme, useTheme} from './theme';

export type ReStyles<T> = {[P in keyof T]: AllRestyleProps};
type AllStyles = ViewStyle & TextStyle & ImageStyle;

export const makeStyles =
  <
    T extends ReStyles<any> | StyleSheet.NamedStyles<any>,
    U extends {
      // @ts-expect-error T[P] are the correct properties
      [P in keyof T]: Pick<AllStyles, keyof T[P]>;
    },
    V,
  >(
    styles: T | ((params: {theme: Theme}, props: V) => T),
  ) =>
  // TODO: memoize?
  (props?: V) => {
    const theme = useTheme();
    const css =
      typeof styles === 'function' ? styles({theme}, props as V) : styles;

    const restyles = useRestyles(allRestyleFunctions, Object.values(css));

    const res = Object.keys(css).reduce(
      (acc, key, idx) => ({...acc, [key]: restyles[idx]}),
      {} as U,
    );

    return res;
  };
