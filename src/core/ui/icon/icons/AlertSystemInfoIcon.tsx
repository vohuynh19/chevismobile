import Svg, {Path, SvgProps} from 'react-native-svg';

const AlertSystemInfoIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-1.5a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1ZM13 8a1 1 0 1 0-2 0v.02a1 1 0 1 0 2 0V8Z"
    />
  </Svg>
);

export default AlertSystemInfoIcon;
