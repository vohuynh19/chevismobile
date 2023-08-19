import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationProductCatalogueIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M6 18.041a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.041a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.775l5.809-6.358c.411-.45 1.075-.513 1.483-.14l4.43 4.046c.407.373.404 1.04-.007 1.49l-5.652 6.187H21.2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-18Zm2 17v-16h4v16H4Zm6.581 0h9.62v-4h-5.965l-3.655 4ZM10 17.711v-5.93l6.54-7.159 2.954 2.698L10 17.712Z"
      />
    </G>
  </Svg>
);

export default NavigationProductCatalogueIcon;
