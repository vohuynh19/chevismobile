import Svg, {Path, SvgProps} from 'react-native-svg';

const ChevronDownIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.29 15.704-4.997-4.997a1 1 0 0 1 1.414-1.414L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.417-.003Z"
    />
  </Svg>
);

export default ChevronDownIcon;
