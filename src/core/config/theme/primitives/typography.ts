// eslint-disable-next-line import/no-cycle
import { AllRestyleProps } from '../restyle';

export const headingDisplay = {
  fontFamily: 'SourceSansPro-Regular',
  fontWeight: '400',
  fontSize: 40,
  lineHeight: 56,
};

export const headingDisplayBold = {
  fontFamily: 'SourceSansPro-Bold',
  fontWeight: '700',
  fontSize: 40,
  lineHeight: 56,
};

export const heading1 = {
  fontFamily: 'SourceSansPro-Bold',
  fontWeight: '700',
  fontSize: 30,
  lineHeight: 33,
} as const;

export const heading2 = {
  fontFamily: 'SourceSansPro-Regular',
  fontWeight: '400',
  fontSize: 24,
  lineHeight: 33,
};

export const heading2Bold = {
  fontFamily: 'SourceSansPro-Bold',
  fontWeight: '700',
  fontSize: 24,
  lineHeight: 33,
};

export const heading3 = {
  fontFamily: 'SourceSansPro-Bold',
  fontWeight: '700',
  fontSize: 22,
  lineHeight: 24,
};

export const heading4 = {
  fontFamily: 'SourceSansPro-Bold',
  fontWeight: '700',
  fontSize: 20,
  lineHeight: 24,
};

const baseBodyStyles: AllRestyleProps = {
  fontStyle: 'normal',
  fontFamily: 'System',
};

export const body: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '400',
  fontSize: 16,
  lineHeight: 22,
};

export const bodyMedium: AllRestyleProps = {
  ...body,
  fontWeight: '500',
};

export const bodyBold: AllRestyleProps = {
  ...body,
  fontWeight: '700',
};

export const bodySmall: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '400',
  fontSize: 14,
  lineHeight: 20,
};

export const bodySmallMedium: AllRestyleProps = {
  ...bodySmall,
  fontWeight: '500',
};

export const bodySmallBold: AllRestyleProps = {
  ...bodySmall,
  fontWeight: '700',
};

export const headline: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '400',
  fontSize: 18,
  lineHeight: 24,
};

export const headlineMedium: AllRestyleProps = {
  ...headline,
  fontWeight: '500',
};

export const headlineBold: AllRestyleProps = {
  ...headline,
  fontWeight: '700',
};

export const caption: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '400',
  fontSize: 12,
  lineHeight: 18,
};

export const captionMedium: AllRestyleProps = {
  ...caption,
  fontWeight: '500',
};

export const captionBold: AllRestyleProps = {
  ...caption,
  fontWeight: '700',
};

export const amountLMedium: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '500',
  fontSize: 26,
  lineHeight: 32,
};

export const amountLBold: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '700',
  fontSize: 26,
  lineHeight: 32,
};

export const amountM: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '400',
  fontSize: 24,
  lineHeight: 32,
};
export const amountMBold: AllRestyleProps = {
  ...amountM,
  fontWeight: '700',
};
export const amountMMedium: AllRestyleProps = {
  ...amountM,
  fontWeight: '500',
};
export const note: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '400',
  fontSize: 10,
  lineHeight: 14,
};
export const noteMedium: AllRestyleProps = {
  ...note,
  fontWeight: '500',
};

export const noteBold: AllRestyleProps = {
  ...note,
  fontWeight: '700',
};

export const customPINPad: AllRestyleProps = {
  ...baseBodyStyles,
  fontWeight: '400',
  fontSize: 32,
  lineHeight: 48,
};
