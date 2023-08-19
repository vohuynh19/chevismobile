import Svg, {Path, SvgProps} from 'react-native-svg';

const WontpayIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H4v-7h6a1.5 1.5 0 0 0 0-3H4V6h8a1 1 0 1 0 0-2H4Zm2 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm10-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"
    />
    <Path d="M21.216 8.694a1.045 1.045 0 1 0 1.478-1.478L20.478 5l2.216-2.216a1.045 1.045 0 0 0-1.478-1.478L19 3.522l-2.216-2.216a1.045 1.045 0 0 0-1.478 1.478L17.522 5l-2.216 2.216a1.045 1.045 0 0 0 1.478 1.478L19 6.478l2.216 2.216Z" />
  </Svg>
);

export default WontpayIcon;
