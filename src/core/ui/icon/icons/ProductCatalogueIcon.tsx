import Svg, {G, Path, SvgProps} from 'react-native-svg';

const ProductCatalogueIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M6.95 17c0 .552-.443 1-.99 1a.995.995 0 0 1-.99-1c0-.552.443-1 .99-1 .547 0 .99.448.99 1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99 2A.995.995 0 0 0 2 3v18c0 .552.443 1 .99 1h18.02c.547 0 .99-.448.99-1v-6c0-.552-.443-1-.99-1h-5.087l4.401-4.866c.369-.408.34-1.04-.063-1.413l-4.386-4.047a.983.983 0 0 0-1.398.064L9.92 8.775V3c0-.552-.443-1-.99-1H2.99Zm11.124 14h5.906v4h-9.524l3.618-4ZM15.27 5.825l-5.35 5.916v5.93l8.273-9.148-2.923-2.697ZM3.98 4v16h3.96V4H3.98Z"
      />
    </G>
  </Svg>
);

export default ProductCatalogueIcon;
