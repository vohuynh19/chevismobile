import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowCornerDownLeftIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 5a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H7.414l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L7.414 13H17a3 3 0 0 0 3-3V6a1 1 0 0 0-1-1Z"
    />
  </Svg>
);

export default ArrowCornerDownLeftIcon;
