import Svg, {Path, SvgProps} from 'react-native-svg';

const TakePhotoIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.72 4a2 2 0 0 0-1.897 1.368L6.28 7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-1.28l-.543-1.632A2 2 0 0 0 15.279 4H8.721Zm0 2h6.56l.543 1.632A2 2 0 0 0 17.721 9H19a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1.64a1.5 1.5 0 0 0 1.423-1.026L8.72 6ZM10 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
    />
  </Svg>
);

export default TakePhotoIcon;
