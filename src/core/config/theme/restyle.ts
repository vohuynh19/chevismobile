import {all, AllProps, composeRestyleFunctions} from '@shopify/restyle';
import {Theme} from './theme';

export const allRestyleFunctions = composeRestyleFunctions<
  Theme,
  AllProps<Theme>
>(all);

export type AllRestyleProps = AllProps<Theme>;
