import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationNetwork2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 3a5 5 0 0 0-4.926 5.86l-6.797 2.55a5 5 0 1 0-1.375 6.662l3.769 3.425a5 5 0 1 0 6.767-1.863l2.08-6.657A5 5 0 1 0 24 3Zm-3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm.606 4.39a5.023 5.023 0 0 1-1.8-1.668l-6.856 2.571a4.976 4.976 0 0 1-.684 3.315l3.732 3.393a4.978 4.978 0 0 1 3.534-.973l2.074-6.637ZM8 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm11 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  </Svg>
);

export default NavigationNetwork2XIcon;
