import Svg, {Path, SvgProps} from 'react-native-svg';

const DownloadDocumentIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2a2 2 0 0 0-2 2v3a1 1 0 0 0 2 0V4h5.586L17 8.414V20h-5a1 1 0 1 0 0 2h5a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Zm0 9a1 1 0 1 0-2 0v7.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L7 18.586V11Z"
    />
  </Svg>
);

export default DownloadDocumentIcon;
