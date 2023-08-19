import Svg, {Path, SvgProps} from 'react-native-svg';

const ReferenceTrueIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H7v3a1 1 0 1 1-2 0V7H2a1 1 0 1 1 0-2h3V2a1 1 0 0 1 1-1Zm12 12a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM3.793 18.379a1 1 0 1 0 1.414 1.414L19.793 5.207a1 1 0 0 0-1.414-1.414L3.793 18.379Z"
    />
  </Svg>
);

export default ReferenceTrueIcon;
