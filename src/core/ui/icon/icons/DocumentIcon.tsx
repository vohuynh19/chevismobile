import Svg, {Path, SvgProps} from 'react-native-svg';

const DocumentIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm7.586 0H7v16h10V8.414L12.586 4Z"
    />
  </Svg>
);

export default DocumentIcon;
