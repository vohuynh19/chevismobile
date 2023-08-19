import Svg, {Path, SvgProps} from 'react-native-svg';

const ChevronUpIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.293 9.293-.005.005-4.995 4.995a1 1 0 0 0 1.414 1.414L12 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0Z"
    />
  </Svg>
);

export default ChevronUpIcon;
