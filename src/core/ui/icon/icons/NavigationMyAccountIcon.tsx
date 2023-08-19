import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationMyAccountIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M9 10.5a3 3 0 1 1 5.13 2.113 4.013 4.013 0 0 1 1.642 2.054 1 1 0 0 1-1.886.666 2.001 2.001 0 0 0-3.772 0 1 1 0 1 1-1.886-.666 4.013 4.013 0 0 1 1.643-2.054A2.99 2.99 0 0 1 9 10.5Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
      <Path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z" />
    </G>
  </Svg>
);

export default NavigationMyAccountIcon;
