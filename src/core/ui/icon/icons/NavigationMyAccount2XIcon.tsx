import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationMyAccount2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M11 14a5 5 0 1 1 8.334 3.726 8.033 8.033 0 0 1 3.595 3.273 1 1 0 0 1-1.73 1.002A5.997 5.997 0 0 0 16 19a5.997 5.997 0 0 0-5.198 3 1 1 0 1 1-1.731-1 8.033 8.033 0 0 1 3.595-3.274A4.987 4.987 0 0 1 11 14Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <Path d="M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13-13 13S3 23.18 3 16ZM16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5Z" />
    </G>
  </Svg>
);

export default NavigationMyAccount2XIcon;
