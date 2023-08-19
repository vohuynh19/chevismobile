import {ComponentProps, useCallback, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {ViewStyle} from 'react-native';
import {isIos} from '../../utils/platform';

import {makeStyles} from '../../theme';

import {Button} from '../button/Button';
import {Icon} from '../icon';
import {Spinner} from '../spinner/Spinner';
import {View} from '../view/View';
import {Input, InputRef} from './Input';

interface Props extends ComponentProps<typeof Input> {
  onCancel: () => void;
  containerStyle?: ViewStyle;
  isLoading?: boolean;
  withCancel?: boolean;
}

export const SearchInput = ({
  onCancel,
  value,
  onChangeText,
  containerStyle,
  disabled,
  isLoading,
  withCancel = false,
  ...props
}: Props) => {
  const {t} = useTranslation();
  const styles = useStyles();
  const inputRef = useRef<InputRef>(null);

  const handleCancel = useCallback(() => {
    inputRef?.current?.blur();
    onCancel();
  }, [onCancel]);

  const iconColor = disabled ? 'neutral800' : 'primary500';

  const getRightIcon = () => {
    if (isLoading) {
      return <Spinner />;
    }
    return undefined;
  };

  return (
    <View style={containerStyle} flexDirection="row" alignItems="center">
      <Input
        testID="inputSearch"
        accessibilityRole="search"
        ref={inputRef}
        placeholder={t('action.search')}
        leftIcon={
          isIos() || !withCancel ? (
            <Icon name="Search" color={iconColor} />
          ) : (
            <Icon name="ArrowLeft" onPress={handleCancel} color={iconColor} />
          )
        }
        rightIcon={getRightIcon()}
        value={value}
        onChangeText={onChangeText}
        focusStyle={styles.focusStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        disabled={disabled}
        allowClear
        height={44}
        {...props}
      />
      {isIos() && withCancel && (
        <Button
          testID="btnCancelSearch"
          title={t('action.cancel')}
          variant="unstyled"
          style={styles.cancelButtonStyle}
          textStyle={styles.cancelButtonTextStyle}
          onPress={handleCancel}
        />
      )}
    </View>
  );
};

const useStyles = makeStyles(({theme}) => ({
  containerStyle: {
    width: 'auto',
    flex: 1,
  },
  inputStyle: {
    height: 44,
    padding: 0,
    paddingRight: 4,
    paddingLeft: 2,
  },
  focusStyle: {
    borderColor: 'transparent',
  },
  cancelButtonStyle: {
    paddingLeft: 4,
  },
  cancelButtonTextStyle: {
    ...theme.textVariants.bodySmallMedium,
    color: 'primary500',
  },
}));
