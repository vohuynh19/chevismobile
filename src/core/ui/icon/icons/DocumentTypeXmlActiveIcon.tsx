import Svg, {Circle, Path, Rect, SvgProps} from 'react-native-svg';

const DocumentTypeXmlActiveIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Rect x={2} y={12} width={20} height={9} rx={1} />
    <Path d="M3.594 19.5h1.524l1.09-1.828h.035L7.34 19.5h1.61l-1.782-2.82v-.02l1.797-2.797H7.371l-1.027 1.91h-.039l-1.035-1.91H3.594l1.723 2.782v.023L3.594 19.5Zm5.965 0h1.261v-3.59h.078l1.282 3.59h.816l1.281-3.59h.082v3.59h1.258v-5.637h-1.629l-1.36 3.825h-.073l-1.364-3.825H9.56V19.5Zm6.976 0h3.828v-1.152h-2.395v-4.485h-1.433V19.5Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 4h3.586L17 8.414V11h2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2h-4.35C8.711 2.53 9 3.232 9 4ZM6 7c.35 0 .687-.06 1-.17V11H5V6.83c.313.11.65.17 1 .17Z"
    />
    <Circle cx={6} cy={4} r={2} />
  </Svg>
);

export default DocumentTypeXmlActiveIcon;
