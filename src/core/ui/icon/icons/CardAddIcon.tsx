import Svg, {G, Path, SvgProps} from 'react-native-svg';

const CardAddIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 2.5a4 4 0 0 0-4 4v9.429a4 4 0 0 0 4 4h6.429a1 1 0 1 0 0-2H5.5a2 2 0 0 1-2-2V9.5h16.857v3.429a1 1 0 0 0 2 0V6.5a4 4 0 0 0-4-4H5.5Zm14.857 4.429H3.5V6.5a2 2 0 0 1 2-2h12.857a2 2 0 0 1 2 2v.429Z"
      />
      <Path d="M18.928 14.557a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2ZM6.928 13.5a1 1 0 1 0 0 2h2.286a1 1 0 1 0 0-2H6.928Z" />
    </G>
  </Svg>
);

export default CardAddIcon;
