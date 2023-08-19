import Svg, {G, Path, SvgProps} from 'react-native-svg';

const ReviewIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M9.5 19.5c.983 0 1.896-.225 2.738-.675A5.389 5.389 0 0 0 14.25 17a5.389 5.389 0 0 0-2.012-1.825A5.719 5.719 0 0 0 9.5 14.5c-.983 0-1.896.225-2.738.675A5.388 5.388 0 0 0 4.75 17c.5.767 1.17 1.375 2.012 1.825.842.45 1.755.675 2.738.675Zm0 2c-1.6 0-3.029-.42-4.287-1.262C3.954 19.396 3.05 18.317 2.5 17c.55-1.317 1.454-2.396 2.713-3.238C6.471 12.921 7.9 12.5 9.5 12.5s3.03.42 4.288 1.262c1.258.842 2.162 1.921 2.712 3.238-.55 1.317-1.454 2.396-2.712 3.238C12.529 21.079 11.1 21.5 9.5 21.5Zm0-3c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0 1 8 17c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 9.5 15.5c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062 0 .417-.146.77-.438 1.062A1.444 1.444 0 0 1 9.5 18.5Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 4a2 2 0 0 1 2-2h5.586a2 2 0 0 1 1.414.586L20.914 7a2 2 0 0 1 .586 1.414V20a2 2 0 0 1-2 2h-1a1 1 0 1 1 0-2h1V8.414L15.086 4H9.5v5a1 1 0 0 1-2 0V4Z"
      />
    </G>
  </Svg>
);

export default ReviewIcon;
