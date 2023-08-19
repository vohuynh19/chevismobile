import Svg, {Path, SvgProps} from 'react-native-svg';

const SubscriptionIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2a1 1 0 0 1 1 1v1.041h4V3a1 1 0 1 1 2 0v1.041h3a2 2 0 0 1 2 2V9.33a8.457 8.457 0 0 0-2-.914V6.04h-3V7a1 1 0 1 1-2 0v-.959h-4V7a1 1 0 0 1-2 0v-.959H5V9.5h6.737a8.548 8.548 0 0 0-2.081 2H5v8.541h3.752c.329.727.757 1.4 1.267 2H5a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1Zm1.293 13.793A1 1 0 0 0 11 17.5h1.02A5 5 0 1 0 17 12.041a1 1 0 0 0 0 2 3 3 0 1 1-2.965 3.459H15a1 1 0 0 0 .707-1.707l-2-2a1 1 0 0 0-1.414 0l-2 2Z"
    />
  </Svg>
);

export default SubscriptionIcon;
