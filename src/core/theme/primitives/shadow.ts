import {generateBoxShadowStyle} from '../generateBoxShadowStyle';

export const shadow = {
  header: {
    ...generateBoxShadowStyle(0, 1, 'shadow', 0.8, 4, 10),
    borderBottomWidth: 1,
    borderBottomColor: 'neutral400',
    backgroundColor: 'white',
  },
  bottomActionBar: {
    ...generateBoxShadowStyle(0, -3, 'shadow', 0.8, 4, 10),
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'neutral400',
  },
  walletCard: {
    ...generateBoxShadowStyle(0, 26, 'primary900', 0.17, 12, 12),
  },
  PINCodeView: {
    ...generateBoxShadowStyle(15, 24, 'shadow', 0.17, 12, 12),
  },
  PINCodeViewError: {
    ...generateBoxShadowStyle(25, 32, 'error100', 0.17, 12, 12),
  },
};
