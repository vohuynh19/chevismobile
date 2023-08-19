import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationDiscountIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 9.959a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM12.5 15.959a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
      />
      <Path d="M7.293 16.293a1 1 0 1 0 1.414 1.414l8-8a1 1 0 0 0-1.414-1.414l-8 8ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 20V8.724a2 2 0 0 1 .464-1.28L7.4 2.72A2 2 0 0 1 8.937 2h6.126a2 2 0 0 1 1.537.72l3.936 4.724A2 2 0 0 1 21 8.724V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2ZM5 8.724V20h14V8.724L15.063 4H8.937L5 8.724Z"
      />
    </G>
  </Svg>
);

export default NavigationDiscountIcon;
