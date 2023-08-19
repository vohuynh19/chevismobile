import Svg, {G, Path, SvgProps} from 'react-native-svg';

const SwapIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M7.707 4.334a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0ZM21.707 15.748a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414Z" />
      <Path d="M7.707 13.748a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414ZM16.293 19.748a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0Z" />
      <Path d="M12 9a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1ZM22 15.041a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Z" />
    </G>
  </Svg>
);

export default SwapIcon;
