import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationTasksIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M15 11a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1ZM14 15a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2h2c1.306 0 2.417.835 2.83 2H17a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.17A3.001 3.001 0 0 1 11 2Zm-.438 3.9A1.004 1.004 0 0 1 10 5a1 1 0 0 1 .994-1H13.006a.995.995 0 0 1 .701.293A1 1 0 0 1 13 6h-2a.996.996 0 0 1-.438-.1Zm5.267.1A3.001 3.001 0 0 1 13 8h-2a3.001 3.001 0 0 1-2.83-2H7v14h10V6h-1.17Z"
      />
    </G>
  </Svg>
);

export default NavigationTasksIcon;
