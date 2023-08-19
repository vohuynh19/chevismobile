import {makeStyles, ReStyles} from '../../theme';

export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'unstyled'
  | 'choice';
export type ButtonSize = 'xs' | 's' | 'base' | 'm';
export type ButtonShape = 'pill' | 'rounded';

const getVariantReStyles = <
  V extends string,
  T extends Record<V, ReStyles<any>>,
>(
  variant: V,
  styles: T,
): T[V] => styles[variant];

const getHeight = (size: ButtonSize) => {
  switch (size) {
    case 'xs':
      return 24;
    case 's':
      return 36;
    case 'm':
      return 62;
    default:
      return 50;
  }
};

export const useButtonStyles = makeStyles(
  (
    {theme},
    {
      variant,
      size,
      shape,
      inverted,
    }: {
      variant: Variant;
      size: ButtonSize;
      shape: ButtonShape;
      inverted: boolean;
    },
  ) => {
    const variantStyles = getVariantReStyles(variant, {
      primary: {
        button: {},
        buttonDisabled: {
          backgroundColor: 'neutralLavender400',
        },
        buttonPressed: {
          opacity: 0.8,
        },
        text: {
          color: inverted ? 'primary900' : 'neutralLavender50',
        },
        textDisabled: {
          color: 'neutralLavender800',
        },
      },
      secondary: {
        button: {
          backgroundColor: inverted ? 'transparent' : 'white',
        },
        buttonPressed: {
          backgroundColor: inverted ? 'secondaryButtonPressed' : 'neutral100',
        },
        buttonDisabled: {
          backgroundColor: inverted ? 'transparent' : 'white',
        },
        text: {
          color: inverted ? 'white' : 'primary500',
        },
        textDisabled: {
          color: 'neutralLavender600',
        },
      },
      tertiary: {
        button: {
          backgroundColor: 'transparent',
        },
        buttonPressed: {
          backgroundColor: 'primary50',
        },
        buttonDisabled: {
          backgroundColor: 'transparent',
        },
        text: {
          color: 'primary500',
        },
        textDisabled: {
          color: 'neutralLavender600',
        },
      },
      choice: {
        button: {
          backgroundColor: 'primary50',
        },
        buttonPressed: {
          backgroundColor: 'primary100',
        },
        buttonDisabled: {
          backgroundColor: 'neutralLavender100',
        },
        text: {
          color: 'primary500',
        },
        textDisabled: {
          color: 'neutralLavender700',
        },
      },
      unstyled: {
        button: {
          backgroundColor: 'transparent',
          paddingHorizontal: 0,
        },
        buttonPressed: {
          opacity: 0.8,
        },
        buttonDisabled: {},
        text: {
          color: 'primary500',
        },
        textDisabled: {
          color: 'neutral800',
        },
      },
    });

    return {
      button: {
        borderRadius: shape === 'pill' ? '3xl' : 'md',
        overflow: 'hidden',
        minHeight: getHeight(size),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 3,
        borderColor: 'transparent',
        ...variantStyles.button,
      },
      pressed: {
        ...variantStyles.buttonPressed,
      },
      text: {
        ...theme.textVariants.bodyBold,
        ...variantStyles.text,
        textAlign: 'center',
        flexShrink: 1,
        flexGrow: 0,
      },
      textDisabled: {
        ...variantStyles.textDisabled,
      },
      loading: {
        marginRight: 1,
      },
      leftIcon: {
        marginRight: 1,
      },
      rightIcon: {
        marginRight: 1,
      },
      fullWidth: {
        width: '100%',
      },
      flex: {
        flex: 1,
      },
      disabled: {
        ...variantStyles.buttonDisabled,
      },
    };
  },
);
