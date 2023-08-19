import Svg, {G, Path, SvgProps} from 'react-native-svg';

const MenuToggleTrueIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M10.5 5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2h7Zm4.293 12.623a1 1 0 0 0 1.414 0l5-5a.996.996 0 0 0 0-1.414l-.004-.004-4.996-4.996a1 1 0 1 0-1.414 1.414l3.293 3.293H3.5a1 1 0 0 0 0 2h14.586l-3.293 3.293a1 1 0 0 0 0 1.414ZM11.5 18a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1Z" />
      <Path d="M10.5 5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2h7Zm4.293 12.623a1 1 0 0 0 1.414 0l5-5a.996.996 0 0 0 0-1.414l-.004-.004-4.996-4.996a1 1 0 1 0-1.414 1.414l3.293 3.293H3.5a1 1 0 0 0 0 2h14.586l-3.293 3.293a1 1 0 0 0 0 1.414ZM11.5 18a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1Z" />
    </G>
  </Svg>
);

export default MenuToggleTrueIcon;
