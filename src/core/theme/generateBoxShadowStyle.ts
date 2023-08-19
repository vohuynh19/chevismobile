import {isIos} from '~core/utils/platform';

export const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowColor: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
) => {
  if (isIos()) {
    return {
      shadowColor,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  }
  return {
    elevation,
    shadowColor,
  };
};
