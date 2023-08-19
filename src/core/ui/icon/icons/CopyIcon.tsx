import Svg, {Path, SvgProps} from 'react-native-svg';

const CopyIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v8a1 1 0 1 0 2 0V5h8a1 1 0 1 0 0-2H5Zm4 4.041a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H9Zm0 2h9v9H9v-9Z"
    />
  </Svg>
);

export default CopyIcon;
