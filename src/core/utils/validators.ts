import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {isValidPhoneNumber} from 'libphonenumber-js';

const EMAIL_VALIDATOR =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const useValidationRules = () => {
  const {t} = useTranslation();

  return useMemo(
    () => ({
      required: {
        value: true,
        message: t('validation.required'),
      },
      email: {
        value: EMAIL_VALIDATOR,
        message: t('validation.email'),
      },
      phonePattern: (value: string) =>
        isValidPhoneNumber(value) || t('validation.phone'),
      maxLength(length: number) {
        return {
          value: length,
          message: t('validation.maxLength', {length}),
        };
      },
      minLengthSmsCode(length: number) {
        return {
          value: length,
          message: t('validation.smsCode'),
        };
      },
      maxLengthSmsCode(length: number) {
        return {
          value: length,
          message: t('validation.smsCode'),
        };
      },
      invalidCharacter: (value: string) =>
        !/[\\/:*?<>"”]/.test(value) || t('validation.invalidCharacter'),
      whitespace: (value: string) =>
        value.trim().length > 0 || t('validation.whitespace'),
      lessThan: <Value extends number | Date | null>(
        value1: Value,
        value2: Value,
        message: string,
      ) => {
        if (value1 && value2) {
          return value1 < value2 || message;
        }
        return true;
      },
    }),
    [t],
  );
};
