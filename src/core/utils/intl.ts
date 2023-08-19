const deviceLocale = 'en-IN';

export const formatNumber = (
  value: string | number | undefined,
  options?: Intl.NumberFormatOptions,
) => {
  if (value === undefined) {
    return '';
  }

  return new Intl.NumberFormat(deviceLocale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(Number(value));
};

export const decimalSeparator = new Intl.NumberFormat(deviceLocale)
  .format(1.1)
  .includes('.')
  ? '.'
  : ',';
