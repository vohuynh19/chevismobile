import Svg, {Path, SvgProps} from 'react-native-svg';

const UploadIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2a2 2 0 0 0-2 2v3a1 1 0 0 0 2 0V4h5.586L17 8.414V20h-7a1 1 0 1 0 0 2h7a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7ZM2.293 13.293a1 1 0 1 0 1.414 1.414L5 13.414V21a1 1 0 1 0 2 0v-7.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3Z"
    />
  </Svg>
);

export default UploadIcon;
