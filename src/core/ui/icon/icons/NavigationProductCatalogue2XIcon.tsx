import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationProductCatalogue2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path d="M7 24a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0v2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v23A1.5 1.5 0 0 0 4.5 29h23a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-6.983l6.869-6.778a1.5 1.5 0 0 0 .007-2.128l-4.945-4.945a1.5 1.5 0 0 0-2.128.006L13 12.565V4.5A1.5 1.5 0 0 0 11.5 3h-7ZM13 15.41v8.198l12.623-12.456-4.234-4.233L13 15.41Zm0 11.008V27h14v-6h-8.51L13 26.418ZM11 5v22H5V5h6Z"
      />
    </G>
  </Svg>
);

export default NavigationProductCatalogue2XIcon;
