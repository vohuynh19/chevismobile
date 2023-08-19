import {ComponentProps} from 'react';
import {decimalSeparator, formatNumber} from '../../utils/intl';

import {Input} from './Input';

type Props = ComponentProps<typeof Input>;

/**
 * The square brackets "[ ]" indicate a character set. The caret "^" inside the brackets negates the character set.
 * So, this regular expression is looking for any character that is not a hyphen, plus, digit, or comma.
 * The "g" flag is used to perform a global search, meaning it will find all matches in the input string, rather than stopping at the first match.
 */
const cleanPattern = new RegExp(`[^-+0-9${decimalSeparator}]`, 'g');

const removeMultipleSeparator = (value: string) => {
  const firstCommaIndex = value.indexOf(decimalSeparator);
  return (
    value.substring(0, firstCommaIndex + 1) +
    value
      .substring(firstCommaIndex + 1)
      .replace(new RegExp(`[${decimalSeparator}]`, 'g'), '')
  );
};

export const NumberInput = ({value, onChangeText, ...rest}: Props) => {
  // parse display value to actual javascript number
  // 1.230,23 -> 1230.23
  const onChange = (text: string) => {
    const cleaned = removeMultipleSeparator(text.replace(cleanPattern, ''));
    const normalized = cleaned.replace(decimalSeparator, '.');
    onChangeText?.(normalized);
  };

  const getDisplayValue = () => {
    // format javascript number to locale aware value
    // 1230.23 -> 1.230,23
    const formattedValue = formatNumber(value, {
      maximumFractionDigits: 2,
      minimumFractionDigits: undefined,
    });

    // was the last inputted value a dot
    // value is always a javascript number so no comma (,) is present
    let lastCharIsDecimal = false;
    if (value?.charAt(value.length - 1) === '.') {
      lastCharIsDecimal = true;
    }

    // add an optional extra decimal separator after the formatted value
    // Because inputting 1230, results in 1230 for formattedValue
    return `${formattedValue}${lastCharIsDecimal ? decimalSeparator : ''}`;
  };

  return (
    <Input
      testID="inputNumber"
      value={getDisplayValue()}
      onChangeText={onChange}
      keyboardType="numeric"
      {...rest}
    />
  );
};
