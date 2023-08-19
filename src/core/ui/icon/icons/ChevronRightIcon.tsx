import Svg, {G, Path, SvgProps} from 'react-native-svg';

const ChevronRightIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M9.707 18.207a1 1 0 0 1-1.414-1.414l4.293-4.293-4.293-4.293a1 1 0 1 1 1.414-1.414l4.997 4.997.003.003a1.006 1.006 0 0 1 .256.435 1 1 0 0 1-.256.98c-.002 0-.004.003-.005.005l-4.995 4.994Z" />
      <Path d="M9.707 18.207a1 1 0 0 1-1.414-1.414l4.293-4.293-4.293-4.293a1 1 0 1 1 1.414-1.414l4.997 4.997.003.003a1.006 1.006 0 0 1 .256.435 1 1 0 0 1-.256.98c-.002 0-.004.003-.005.005l-4.995 4.994Z" />
    </G>
  </Svg>
);

export default ChevronRightIcon;
