import Svg, {Path, SvgProps} from 'react-native-svg';

const LastPageIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm-4.295 5.332.002.002a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l4.293-4.293-4.293-4.293a1 1 0 0 1 1.414-1.414l4.998 4.998Z"
    />
  </Svg>
);

export default LastPageIcon;
