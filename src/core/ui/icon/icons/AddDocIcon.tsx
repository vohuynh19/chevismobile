import Svg, {Path, SvgProps} from 'react-native-svg';

const AddDocIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 30 30" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 5a2.5 2.5 0 0 1 2.5-2.5h6.982a2.5 2.5 0 0 1 1.768.732l5.518 5.518a2.5 2.5 0 0 1 .732 1.768v5.357a1.25 1.25 0 1 1-2.5 0v-5.357L15.732 5H8.75v20h5.375a1.25 1.25 0 1 1 0 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5V5ZM22.5 19c.69 0 1.25.56 1.25 1.25v2.5h2.5a1.25 1.25 0 1 1 0 2.5h-2.5v2.5a1.25 1.25 0 1 1-2.5 0v-2.5h-2.5a1.25 1.25 0 1 1 0-2.5h2.5v-2.5c0-.69.56-1.25 1.25-1.25Z"
    />
  </Svg>
);

export default AddDocIcon;
