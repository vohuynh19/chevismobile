import Svg, {G, Path, SvgProps} from 'react-native-svg';

const SplitRowIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M3 2a1 1 0 0 1 1 1v5.5h16V3a1 1 0 1 1 2 0v5.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1ZM2 15.5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V21a1 1 0 1 1-2 0v-5.5H4V21a1 1 0 1 1-2 0v-5.5Z" />
      <Path d="M9.293 4.207a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L13 3.914V6a1 1 0 1 1-2 0V3.914l-.293.293a1 1 0 0 1-1.414 0ZM14.707 19.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V18a1 1 0 1 1 2 0v2.086l.293-.293a1 1 0 0 1 1.414 0Z" />
    </G>
  </Svg>
);

export default SplitRowIcon;
