import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationDocCenter2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path d="M6 4a2 2 0 0 0-2 2v7a1 1 0 1 0 2 0V6h11v1.5A1.5 1.5 0 0 0 18.5 9H26v2H12a1 1 0 1 0 0 2h14v5a1 1 0 1 0 2 0V9a2 2 0 0 0-2-2h-7V6a2 2 0 0 0-2-2H6Z" />
      <Path d="M8.293 14.293a1 1 0 0 1 1.414 1.414L7.496 17.92H18a1 1 0 1 1 0 2H7.333l2.374 2.374a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4ZM23.707 19.293a1 1 0 0 0-1.414 1.414l2.211 2.212H14a1 1 0 1 0 0 2h10.667l-2.374 2.374a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Z" />
    </G>
  </Svg>
);

export default NavigationDocCenter2XIcon;
