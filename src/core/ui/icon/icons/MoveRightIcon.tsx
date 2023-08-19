import Svg, {G, Path, SvgProps} from 'react-native-svg';

const MoveRightIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M6.707 6.293a1 1 0 0 0-1.414 1.414L9.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Zm7 0a1 1 0 1 0-1.414 1.414L16.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" />
      <Path d="M6.707 6.293a1 1 0 0 0-1.414 1.414L9.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Zm7 0a1 1 0 1 0-1.414 1.414L16.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" />
    </G>
  </Svg>
);

export default MoveRightIcon;
