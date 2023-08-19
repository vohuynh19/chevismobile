import Svg, {G, Path, SvgProps} from 'react-native-svg';

const CleanUpIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 5a3 3 0 1 1 6 0v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5Zm3-1a1 1 0 0 0-1 1v6h2V5a1 1 0 0 0-1-1Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3Zm2 1v1h10v-1H7Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.051 14.684A1 1 0 0 1 6 14h12a1 1 0 0 1 .949.684l1.56 4.684A2 2 0 0 1 18.614 22H5.386a2 2 0 0 1-1.897-2.633l1.561-4.683ZM6.721 16l-1.334 4h13.226l-1.334-4H6.721Z"
      />
      <Path d="M8 18a1 1 0 0 1 1-1M11 18a1 1 0 0 1 1-1M14 18a1 1 0 0 1 1-1" />
    </G>
  </Svg>
);

export default CleanUpIcon;
