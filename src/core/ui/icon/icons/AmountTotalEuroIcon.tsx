import Svg, {Path, SvgProps} from 'react-native-svg';

const AmountTotalEuroIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.49 2A2 2 0 0 0 6.49 4v3A1 1 0 0 0 8.49 7V4h5.59l4.418 4.414V20h-3.002a1 1 0 1 0 0 2h3.002a2 2 0 0 0 2.002-2V8.414A2 2 0 0 0 19.914 7l-4.418-4.414A2.002 2.002 0 0 0 14.081 2H8.49Zm2.089 15.992 1.553 1.568c-.864 1.04-2.098 1.632-3.795 1.632-2.306 0-4.147-1.248-4.788-3.664H2.06v-1.456h1.281c-.016-.16-.016-.32-.016-.48 0-.16 0-.32.016-.48h-1.28v-1.44h1.504c.64-2.32 2.482-3.568 4.772-3.568 1.746 0 2.883.592 3.811 1.664l-1.569 1.504c-.464-.544-1.201-1.104-2.242-1.104-1.089 0-1.921.528-2.37 1.504h2.706v1.44H5.615c-.016.16-.016.32-.016.48 0 .16 0 .32.016.48h3.058v1.456H5.935c.449 1.04 1.297 1.584 2.402 1.584 1.057 0 1.73-.56 2.242-1.12Z"
    />
  </Svg>
);

export default AmountTotalEuroIcon;