import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationAccountsPayable2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3a2 2 0 0 0-2 2v7a1 1 0 1 0 2 0V5h7.586L23 11.414V27H9v-5a1 1 0 1 0-2 0v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11.414A2 2 0 0 0 24.414 10L18 3.586A2 2 0 0 0 16.586 3H9ZM4 16a1 1 0 1 0 0 2h10.92l-2.294 2.293a1 1 0 0 0 1.415 1.414l3.998-3.999h.002a1.002 1.002 0 0 0 0-1.415l-.002-.002-3.998-3.998a1 1 0 0 0-1.415 1.414L14.92 16H4Z"
    />
  </Svg>
);

export default NavigationAccountsPayable2XIcon;
