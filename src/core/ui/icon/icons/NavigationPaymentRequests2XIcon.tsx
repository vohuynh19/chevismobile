import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationPaymentRequests2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 17a1 1 0 0 1 1-1h7.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm12-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7 21a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm7-1a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2H14Zm3 1a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1ZM27 14H5v-3h22v3Z"
      />
      <Path d="M27.29 25.796a1 1 0 0 0 1.088 1.628 1.19 1.19 0 0 0 .329-.22 1 1 0 0 0 .21-.32 1 1 0 0 0-1.302-1.308.999.999 0 0 0-.325.22ZM28 20.498a.997.997 0 0 1 .997 1 1 1 0 0 1-.997.998.997.997 0 0 0-.998 1 1 1 0 0 0 .998 1 2.99 2.99 0 0 0 2.59-1.501 3.002 3.002 0 0 0-1.096-4.095A2.99 2.99 0 0 0 25.404 20a1.002 1.002 0 0 0 .37 1.37.996.996 0 0 0 1.357-.37.998.998 0 0 1 .868-.5Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v7.5a1 1 0 1 1-2 0V8H5v16h18a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2V8Z"
      />
    </G>
  </Svg>
);

export default NavigationPaymentRequests2XIcon;
