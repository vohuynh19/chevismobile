import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationConnectionsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      <Path d="m4.945 17.168 3-2 1.11 1.664-3 2-1.11-1.664ZM13 7v3h-2V7h2Zm4.945 11.832-3-2 1.11-1.664 3 2-1.11 1.664Z" />
      <Path d="M20 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
    </G>
  </Svg>
);

export default NavigationConnectionsIcon;
