import Svg, {G, Path, SvgProps} from 'react-native-svg';

const ViewDocumentIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a1 1 0 1 0 0-2H6V4h5.586L16 8.414v2.627a1 1 0 1 0 2 0V8.414A2 2 0 0 0 17.414 7L13 2.586A2 2 0 0 0 11.586 2H6Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 0 0-3.477 5.978l-1.144 1.143a1 1 0 0 0 1.414 1.415l1.122-1.122A4 4 0 1 0 18 14Z"
      />
    </G>
  </Svg>
);

export default ViewDocumentIcon;
