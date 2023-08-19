import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationConnections2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M16 14.333A4.333 4.333 0 1 0 16 23a4.333 4.333 0 0 0 0-8.667Zm-6.333 4.334a6.333 6.333 0 1 1 12.666 0 6.333 6.333 0 0 1-12.666 0ZM16 5a1.667 1.667 0 1 0 0 3.333A1.667 1.667 0 0 0 16 5Zm-3.667 1.667a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0ZM5.333 23.667a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333Zm-3.666 1.666a3.667 3.667 0 1 1 7.333 0 3.667 3.667 0 0 1-7.333 0Z" />
      <Path d="m6.779 23.168 4-2.667 1.109 1.664-4 2.667-1.11-1.664ZM17 9.333v4h-2v-4h2Zm7.112 15.5-4-2.668 1.11-1.664 4 2.667-1.11 1.664Z" />
      <Path d="M26.667 23.667a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333ZM23 25.333a3.667 3.667 0 1 1 7.333 0 3.667 3.667 0 0 1-7.333 0Z" />
    </G>
  </Svg>
);

export default NavigationConnections2XIcon;
