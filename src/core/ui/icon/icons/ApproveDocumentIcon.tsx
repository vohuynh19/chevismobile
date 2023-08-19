import Svg, {G, Path, SvgProps} from 'react-native-svg';

const ApproveDocumentIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M7 2a2 2 0 0 0-2 2v5a1 1 0 0 0 2 0V4h5.586L17 8.414V20h-1a1 1 0 1 0 0 2h1a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Z" />
      <Path d="M13.707 18.29A1 1 0 0 0 13 16.581h-1.02A5 5 0 1 0 7 22.042a1 1 0 1 0 0-2 3 3 0 1 1 2.965-3.46H9a1 1 0 0 0-.707 1.707l2 2a1 1 0 0 0 1.414 0l2-2Z" />
    </G>
  </Svg>
);

export default ApproveDocumentIcon;
