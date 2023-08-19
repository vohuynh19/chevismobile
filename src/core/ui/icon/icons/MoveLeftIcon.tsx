import Svg, {G, Path, SvgProps} from 'react-native-svg';

const MoveLeftIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M10.293 6.293a1 1 0 1 1 1.414 1.414L7.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Zm7 0a1 1 0 1 1 1.414 1.414L14.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Z" />
      <Path d="M10.293 6.293a1 1 0 1 1 1.414 1.414L7.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Zm7 0a1 1 0 1 1 1.414 1.414L14.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Z" />
    </G>
  </Svg>
);

export default MoveLeftIcon;
