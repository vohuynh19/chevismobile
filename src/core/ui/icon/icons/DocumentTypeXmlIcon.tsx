import Svg, {G, Path, SvgProps} from 'react-native-svg';

const DocumentTypeXmlIcon = ({
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
        d="M2 13a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7Zm3.118 6.5H3.594l1.723-2.832v-.023l-1.723-2.782H5.27l1.035 1.91h.04l1.026-1.91h1.594L7.168 16.66v.02L8.95 19.5H7.34l-1.097-1.828h-.036L5.117 19.5Zm5.702 0H9.56v-5.637h1.632l1.364 3.825h.074l1.36-3.825h1.628V19.5H14.36v-3.59h-.082l-1.28 3.59h-.817l-1.282-3.59h-.078v3.59Zm5.715 0h3.828v-1.152h-2.395v-4.485h-1.433V19.5Z"
      />
    </G>
  </Svg>
);

export default DocumentTypeXmlIcon;
