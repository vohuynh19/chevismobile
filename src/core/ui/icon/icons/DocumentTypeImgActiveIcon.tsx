import Svg, {Circle, Path, Rect, SvgProps} from 'react-native-svg';

const DocumentTypeImgActiveIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Rect x={2} y={12} width={20} height={9} rx={1} />
    <Path d="M4.93 19.5h1.434v-5.637H4.93V19.5Zm2.351 0h1.262v-3.59h.078l1.281 3.59h.817L12 15.91h.082v3.59h1.258v-5.637h-1.63l-1.358 3.825h-.075l-1.363-3.825H7.281V19.5Zm9.488.152c1.594 0 2.559-.949 2.559-2.5v-.726h-2.414v.984h1.03l-.003.094c-.039.578-.488.96-1.14.96-.82 0-1.352-.687-1.352-1.8v-.008c0-1.093.48-1.758 1.281-1.758.567 0 1 .297 1.121.77l.008.035h1.414l-.004-.039c-.144-1.148-1.164-1.953-2.539-1.953-1.691 0-2.738 1.133-2.738 2.96v.009c0 1.851 1.043 2.972 2.777 2.972Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 4h3.586L17 8.414V11h2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2h-4.35C8.711 2.53 9 3.232 9 4ZM6 7c.35 0 .687-.06 1-.17V11H5V6.83c.313.11.65.17 1 .17Z"
    />
    <Circle cx={6} cy={4} r={2} />
  </Svg>
);

export default DocumentTypeImgActiveIcon;
