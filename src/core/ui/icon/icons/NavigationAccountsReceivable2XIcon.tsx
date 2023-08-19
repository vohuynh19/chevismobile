import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationAccountsReceivable2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0V5h7.586L23 11.414V27H9v-2a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11.414A2 2 0 0 0 24.414 10L18 3.586A2 2 0 0 0 16.586 3H9Zm9 13a1 1 0 1 1 0 2H7.08l2.294 2.293a1 1 0 1 1-1.415 1.414l-3.998-3.999h-.002a.997.997 0 0 1 0-1.415l.002-.001 3.998-4a1 1 0 0 1 1.415 1.415L7.08 16H18Z"
    />
  </Svg>
);

export default NavigationAccountsReceivable2XIcon;
