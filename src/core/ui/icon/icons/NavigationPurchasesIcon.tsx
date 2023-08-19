import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationPurchasesIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M12.793 9.207a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 0 0-1.414-1.414l-.793.793V1a1 1 0 1 0-2 0v5.086l-.793-.793a1 1 0 1 0-1.414 1.414l2.5 2.5ZM9.5 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM17.5 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      <Path d="M2 3a1 1 0 0 1 1-1h2.165a2 2 0 0 1 1.968 1.642L8.835 13h9.384l1.81-7.243a1 1 0 1 1 1.941.486l-1.81 7.242A2 2 0 0 1 18.22 15H8.834a2 2 0 0 1-1.968-1.642L5.165 4H3a1 1 0 0 1-1-1Z" />
    </G>
  </Svg>
);

export default NavigationPurchasesIcon;
