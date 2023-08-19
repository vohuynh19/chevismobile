import Svg, {G, Path, SvgProps} from 'react-native-svg';

const SortDescendingIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M7.293 14.293a1 1 0 0 1 1.414 0L12 17.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z" />
      <Path
        opacity={0.32}
        d="M11.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 6.414 8.707 9.707a1 1 0 0 1-1.414-1.414l4-4Z"
      />
    </G>
  </Svg>
);

export default SortDescendingIcon;
