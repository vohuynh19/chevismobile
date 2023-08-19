import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationDocumentsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6a3 3 0 0 1 3-3h3.558a3 3 0 0 1 2.847 2.051L10.72 6H17a3 3 0 0 1 3 3v1h2a1 1 0 0 1 .976 1.217l-1.652 7.434A3 3 0 0 1 18.396 21H4a3 3 0 0 1-3-3V6Zm17 4V9a1 1 0 0 0-1-1h-7a1 1 0 0 1-.949-.684l-.544-1.632A1 1 0 0 0 7.558 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.198l1.826-8.217A1 1 0 0 1 8 10h10ZM7.247 19h11.149a1 1 0 0 0 .976-.783L20.753 12H8.803l-1.556 7Z"
    />
  </Svg>
);

export default NavigationDocumentsIcon;
