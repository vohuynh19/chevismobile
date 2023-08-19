import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationPassesIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 25" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 20.7h-3.2v-3.2H24v3.2ZM20.2 20.7H17v-3.2h3.2v3.2ZM20.2 24.5H17v-3.2h3.2v3.2Z"
      />
      <Path d="M20.8 21.3H22v1.2h-1.2v-1.2ZM20.8 23.3H22v1.2h-1.2v-1.2ZM22.8 21.3H24v1.2h-1.2v-1.2ZM22.8 23.3H24v1.2h-1.2v-1.2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.5a2 2 0 0 1 2-2h16c1.1 0 2 .888 2 1.997V14.5a1 1 0 1 1-2 0v-10H4v16h10a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2v-16Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 8H3V6h18v2ZM21 11.5H3v-2h18v2ZM8 15H3v-2h5a2 2 0 0 1 2 2v1h4v-1a2 2 0 0 1 2-2h5v2h-5v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1Z"
      />
    </G>
  </Svg>
);

export default NavigationPassesIcon;
