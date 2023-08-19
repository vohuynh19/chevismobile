import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationSessionsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1h3a2 2 0 0 1 2 2v2.516a8.967 8.967 0 0 0-2-1.004V6h-3v1a9.03 9.03 0 0 0-1.976.218A1 1 0 0 1 14 7V6h-4v1a1 1 0 0 1-2 0V6H5v3.5h4.775a9.036 9.036 0 0 0-1.571 2H5V20h2.936c.361.728.819 1.4 1.356 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1Z" />
      <Path d="M18.942 16.585a3 3 0 0 1-.82 1.536L16 16v-3a3 3 0 0 1 2.942 3.585Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </G>
  </Svg>
);

export default NavigationSessionsIcon;
