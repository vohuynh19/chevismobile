import Svg, {G, Path, SvgProps} from 'react-native-svg';

const MenuToggleFalseIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M13.5 5a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2h-7ZM9.207 17.623a1 1 0 0 1-1.414 0l-5-5a.996.996 0 0 1 0-1.414l.004-.004 4.996-4.996a1 1 0 0 1 1.414 1.414l-3.293 3.293H20.5a1 1 0 0 1 0 2H5.914l3.293 3.293a1 1 0 0 1 0 1.414ZM12.5 18a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1Z" />
      <Path d="M13.5 5a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2h-7ZM9.207 17.623a1 1 0 0 1-1.414 0l-5-5a.996.996 0 0 1 0-1.414l.004-.004 4.996-4.996a1 1 0 0 1 1.414 1.414l-3.293 3.293H20.5a1 1 0 0 1 0 2H5.914l3.293 3.293a1 1 0 0 1 0 1.414ZM12.5 18a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1Z" />
    </G>
  </Svg>
);

export default MenuToggleFalseIcon;
