import Svg, {G, Path, SvgProps} from 'react-native-svg';

const DocumentTypeImgIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M7 2a2 2 0 0 0-2 2v7h2V4h5.586L17 8.414V11h2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7Zm14.77 6.652c1.593 0 2.558-.949 2.558-2.5v-.726h-2.414v.984h1.03l-.003.094c-.039.578-.488.96-1.14.96-.82 0-1.352-.687-1.352-1.8v-.008c0-1.093.48-1.758 1.281-1.758.567 0 1 .297 1.121.77l.008.035h1.414l-.004-.039c-.144-1.148-1.164-1.953-2.539-1.953-1.691 0-2.738 1.133-2.738 2.96v.009c0 1.851 1.043 2.972 2.777 2.972ZM6.363 19.5H4.93v-5.637h1.434V19.5Zm2.179 0H7.281v-5.637h1.633l1.363 3.825h.075l1.359-3.825h1.629V19.5h-1.258v-3.59H12l-1.281 3.59h-.817l-1.28-3.59h-.079v3.59Z"
      />
    </G>
  </Svg>
);

export default DocumentTypeImgIcon;
