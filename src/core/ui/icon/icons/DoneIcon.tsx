import Svg, {G, Path, SvgProps} from 'react-native-svg';

const DoneIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M14.757 7H7v10h10v-3.757l2-2V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9.757l-2 2Z" />
      <Path d="M19.707 6.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L12 12.586l6.293-6.293a1 1 0 0 1 1.414 0Z" />
    </G>
  </Svg>
);

export default DoneIcon;
