import Svg, {Path, SvgProps} from 'react-native-svg';

const ZoomOutIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a6.97 6.97 0 0 0 4.192-1.394l3.1 3.101a1 1 0 0 0 1.415-1.414l-3.1-3.1A7 7 0 1 0 11 18ZM8.5 9.959a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2h-5Z"
    />
  </Svg>
);

export default ZoomOutIcon;
