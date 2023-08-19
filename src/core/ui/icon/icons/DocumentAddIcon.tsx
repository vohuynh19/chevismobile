import Svg, {Path, SvgProps} from 'react-native-svg';

const DocumentAddIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V12.7a1 1 0 1 1-2 0V8.414L12.586 4H7v16h4.3a1 1 0 1 1 0 2H7a2 2 0 0 1-2-2V4Zm13 11.2a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
    />
  </Svg>
);

export default DocumentAddIcon;
