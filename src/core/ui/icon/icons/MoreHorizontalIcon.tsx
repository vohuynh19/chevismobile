import Svg, {G, Path, SvgProps} from 'react-native-svg';

const MoreHorizontalIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm5-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
      <Path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm5-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    </G>
  </Svg>
);

export default MoreHorizontalIcon;
