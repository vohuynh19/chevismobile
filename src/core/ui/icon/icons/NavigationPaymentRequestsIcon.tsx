import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationPaymentRequestsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4a2 2 0 0 1 2 2v5H4v7h11a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16ZM4 8h16V6H4v2Zm2 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm14.004 6.404a1 1 0 0 1 1.703-.608 1 1 0 1 1-1.54 1.26 1 1 0 0 1-.163-.652Zm1.7-5.613a.997.997 0 0 0-1.207-.16.998.998 0 0 0-.366.367.999.999 0 0 1-1.652.113A1 1 0 0 1 18.404 15a2.996 2.996 0 0 1 2.592-1.499 2.99 2.99 0 0 1 2.593 1.498 3.002 3.002 0 0 1-1.094 4.096 2.99 2.99 0 0 1-1.496.402.997.997 0 0 1-.998-1 1 1 0 0 1 .998-.998.997.997 0 0 0 .997-1 1 1 0 0 0-.292-.707Z"
    />
  </Svg>
);

export default NavigationPaymentRequestsIcon;
