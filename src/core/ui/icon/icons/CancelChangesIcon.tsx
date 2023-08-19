import Svg, {Path, SvgProps} from 'react-native-svg';

const CancelChangesIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.707 4.334a1 1 0 0 0-1.414 1.414l14 14a1 1 0 1 0 1.414-1.414l-14-14Zm-.414 10 2.379-2.379 1.414 1.415L7 15.455v1.586h1.586l2.086-2.086 1.414 1.415-2.379 2.378a1 1 0 0 1-.707.293H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707Zm12.293-6.293-2.672 2.672 1.414 1.414 3.38-3.379a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.415 0l-3.379 3.379 1.414 1.414L16 6.455l1.586 1.586Z"
    />
  </Svg>
);

export default CancelChangesIcon;
