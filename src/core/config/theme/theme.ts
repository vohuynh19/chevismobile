import {createTheme, useTheme as useRestyleTheme} from '@shopify/restyle';
import * as typography from './primitives/typography';
import {
  borderRadii,
  breakpoints,
  colors,
  shadow,
  spacing,
  zIndices,
} from './primitives';

export const theme = createTheme({
  colors,
  spacing,
  breakpoints,
  borderRadii,
  zIndices,
  textVariants: typography,
  shadow,
});

export const useTheme = () => useRestyleTheme<Theme>();

export type Theme = typeof theme;
