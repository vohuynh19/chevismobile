import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationKeycloak2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M20 8a4 4 0 0 1 3.46 6.008 1.68 1.68 0 0 1-1.435.841 1.94 1.94 0 0 1-1.401-.575l-2.898-2.898a1.94 1.94 0 0 1-.575-1.4 1.68 1.68 0 0 1 .84-1.436A3.986 3.986 0 0 1 20 8Zm2 4a2 2 0 0 0-2.697-1.875l2.572 2.572c.08-.216.125-.45.125-.697Z" />
      <Path d="M20 4a8 8 0 0 0-8 8c0 .818.123 1.54.345 2.24l-8.052 8.053A1 1 0 0 0 4 23v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l2.059-2.058A7.627 7.627 0 0 0 20 20a8 8 0 1 0 0-16Zm-6 8a6 6 0 1 1 6 6c-.727 0-1.447-.168-2.143-.434l-.605-.232L14.585 20H12a1 1 0 0 0-1 1v2H9a1 1 0 0 0-1 1v2H6v-2.586l8.674-8.674-.246-.612C14.146 13.424 14 12.775 14 12Z" />
    </G>
  </Svg>
);

export default NavigationKeycloak2XIcon;
