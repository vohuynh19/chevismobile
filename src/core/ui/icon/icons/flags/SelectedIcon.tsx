import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const SelectedIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <Circle cx={24} cy={24} r={23.5} fill="#50E2D1" stroke="#50E2D1" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.414 14.586a2 2 0 0 1 0 2.828l-16 16a2 2 0 0 1-2.828 0l-6-6a2 2 0 1 1 2.828-2.828L19 29.172l14.586-14.586a2 2 0 0 1 2.828 0Z"
      fill="#312B78"
    />
  </Svg>
);

export default SelectedIcon;
