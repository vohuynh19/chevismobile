import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationSessions2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a1 1 0 0 1 1 1v1h6V4a1 1 0 1 1 2 0v1h4a2 2 0 0 1 2 2v7.515a8.968 8.968 0 0 0-2-1.003V13H7v12h6.512c.252.712.59 1.383 1.003 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4V4a1 1 0 0 1 1-1Zm-1 5V7H7v4h18V7h-4v1a1 1 0 1 1-2 0V7h-6v1a1 1 0 1 1-2 0Z"
      />
      <Path d="M23 19a1 1 0 1 0-2 0v3a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414-1.414L23 21.586V19Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 22a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      />
    </G>
  </Svg>
);

export default NavigationSessions2XIcon;
