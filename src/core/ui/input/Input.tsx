import {
  cloneElement,
  forwardRef,
  ReactElement,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import type {InputProps as RNEInputProps} from '@rneui/base/dist/Input';
import {Input as RNInput} from '@rneui/base/dist/Input';
import {isAndroid, isIos} from '../../utils/platform';

import {makeStyles, useTheme} from '../../theme';

import {Button} from '../button/Button';
import {FormItem} from '../form';
import {Icon} from '../icon';
import {View} from '../view/View';

type InputProps = RNEInputProps & {
  rightIconStyle?: ViewStyle;
  labelContainerStyle?: ViewStyle;
  focusStyle?: ViewStyle;
  allowClear?: boolean;
  readonly?: boolean;
  height?: number;
};

export type InputRef = RNInput;

export const Input = forwardRef<RNInput, InputProps>(
  (
    {
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      labelContainerStyle,
      containerStyle,
      inputContainerStyle,
      inputStyle,
      leftIconContainerStyle,
      focusStyle,
      disabled: disabledProp,
      rightIcon,
      allowClear,
      onChangeText,
      value,
      readonly,
      rightIconStyle,
      height = 56,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const styles = useStyles();
    const theme = useTheme();
    const disabled = readonly ? true : disabledProp;

    const innerRef = useRef<InputRef>(null);

    useImperativeHandle(ref, () => innerRef.current!);

    const hasRightIcon = Boolean(rightIcon);

    const getRightIcon = () => {
      if (hasRightIcon || allowClear || disabled) {
        return (
          <>
            {allowClear &&
              value !== '' &&
              value !== undefined &&
              value !== null &&
              !disabled && (
                <Button
                  testID="btnClearInput"
                  variant="unstyled"
                  onPress={() => onChangeText?.('')}
                  hitSlop={4}
                  disabled={disabled}
                  size="s">
                  <View
                    backgroundColor="primary50"
                    borderRadius="full"
                    justifyContent="center"
                    alignItems="center"
                    alignSelf="center"
                    width={24}
                    height={24}
                    mr={4}>
                    <Icon size={18} name="Close" color="primary900" />
                  </View>
                </Button>
              )}
            {/* eslint-disable-next-line no-nested-ternary */}
            {hasRightIcon ? (
              <View
                width={height}
                height={height}
                justifyContent="center"
                alignItems="center"
                alignSelf="center"
                bg={disabled ? 'primary100' : 'primary500'}
                borderTopRightRadius="lg"
                borderBottomRightRadius="lg"
                style={rightIconStyle}>
                {disabled
                  ? cloneElement(rightIcon as ReactElement, {
                      color: 'primary300',
                    })
                  : (rightIcon as ReactNode)}
              </View>
            ) : disabled ? (
              <View width={height} justifyContent="center" alignItems="center">
                <Icon name="Lock" color="neutralLavender600" />
              </View>
            ) : null}
          </>
        );
      }
      return undefined;
    };

    const readonlyProps = readonly
      ? {editable: false, pointerEvents: 'none'}
      : {};

    useEffect(() => {
      if (innerRef.current && isAndroid()) {
        innerRef?.current?.setNativeProps({
          selection: {start: 0, end: 0},
        });
      }
    }, [innerRef]);

    const input = (
      <RNInput
        // @ts-expect-error ref types do not match
        ref={innerRef}
        containerStyle={[styles.containerStyle, containerStyle]}
        inputContainerStyle={[
          styles.inputContainerStyle,
          inputContainerStyle,
          isFocused &&
            StyleSheet.flatten([styles.inputContainerFocusStyle, focusStyle]),
          Boolean(errorMessage) && styles.inputContainerErrorStyle,
          disabled && styles.inputContainerDisabledStyle,
        ]}
        inputStyle={[styles.inputStyle, inputStyle, {height}]}
        placeholderTextColor={
          disabled
            ? theme.colors.neutralLavender800
            : theme.colors.neutralLavender700
        }
        errorStyle={[
          styles.errorStyle,
          errorStyle,
          !errorMessage && styles.noErrorStyle,
        ]}
        disabledInputStyle={styles.inputDisabledStyle}
        leftIconContainerStyle={[
          styles.iconContainer,
          styles.leftIconContainer,
          leftIconContainerStyle,
        ]}
        rightIconContainerStyle={[
          styles.iconContainer,
          styles.rightIconContainer,
          {height},
        ]}
        errorMessage={errorMessage}
        disabled={disabled}
        onFocus={() => {
          setIsFocused(true);
          if (isAndroid()) {
            innerRef?.current?.setNativeProps({
              // @ts-expect-error setting to undefined does not work
              selection: null,
            });
          }
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChangeText={onChangeText}
        rightIcon={getRightIcon()}
        value={value}
        {...rest}
        {...readonlyProps}
      />
    );

    if (label) {
      return (
        <FormItem style={labelContainerStyle}>
          <FormItem.Label style={labelStyle}>{label}</FormItem.Label>
          {input}
        </FormItem>
      );
    }

    return input;
  },
);

const useStyles = makeStyles(({theme}) => ({
  containerStyle: {
    paddingHorizontal: 0,
  },
  inputContainerStyle: {
    borderColor: 'primary50',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 'lg',
  },
  inputContainerFocusStyle: {
    borderWidth: 1,
    borderColor: 'primary400',
  },
  inputContainerErrorStyle: {
    borderWidth: 1,
    borderColor: 'error400',
  },
  inputContainerDisabledStyle: {
    backgroundColor: 'neutralLavender300',
  },
  inputStyle: {
    ...theme.textVariants.body,
    color: 'primary900',
    padding: 4,
    lineHeight: isIos() ? 20 : 22,
  },
  inputDisabledStyle: {
    color: 'primary900',
  },
  errorStyle: {
    ...theme.textVariants.caption,
    margin: 1,
    color: 'error500',
  },
  noErrorStyle: {
    height: 0,
    margin: 0,
  },
  iconContainer: {
    paddingRight: 0,
    marginVertical: 0,
  },
  rightIconContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  leftIconContainer: {
    paddingLeft: 4,
  },
}));
