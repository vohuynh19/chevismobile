import Svg, {Path, SvgProps} from 'react-native-svg';

const ScanIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6a1 1 0 0 1 1-1h2V3H6a3 3 0 0 0-3 3v2h2V6Zm14 0a1 1 0 0 0-1-1h-2V3h2a3 3 0 0 1 3 3v2h-2V6Zm-1 13a1 1 0 0 0 1-1v-2h2v2a3 3 0 0 1-3 3h-2v-2h2ZM5 16v2a1 1 0 0 0 1 1h2v2H6a3 3 0 0 1-3-3v-2h2Zm2-7.541a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm5 3.459a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
    />
  </Svg>
);

export default ScanIcon;
