import Svg, {Path, SvgProps} from 'react-native-svg';

const SendIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 20V4l19 8-19 8Zm2-3 11.85-5L5 7v3.5l6 1.5-6 1.5V17Z" />
  </Svg>
);

export default SendIcon;
