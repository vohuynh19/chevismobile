import Svg, {G, Path, SvgProps} from 'react-native-svg';

const DocumentSuccessAltIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414v2.627a1 1 0 1 1-2 0V8.414L12.586 4H7v16h1a1 1 0 1 1 0 2H7a2 2 0 0 1-2-2V4Z" />
      <Path d="M21.707 15.707a1 1 0 0 0-1.414-1.414L15 19.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6ZM9.5 12a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5ZM8.5 9.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM9.5 17.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </G>
  </Svg>
);

export default DocumentSuccessAltIcon;
