import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationDocuments2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.667 7.333a3 3 0 0 1 3-3h5.892a3 3 0 0 1 2.846 2.052l.65 1.948h9.278a3 3 0 0 1 3 3v2.334h3a1 1 0 0 1 .977 1.217l-2.32 10.433a3 3 0 0 1-2.928 2.35H4.667a3 3 0 0 1-3-3V7.333Zm22.666 6.334v-2.334a1 1 0 0 0-1-1h-10a1 1 0 0 1-.948-.683l-.878-2.633a1 1 0 0 0-.948-.684H4.667a1 1 0 0 0-1 1v17.334a1 1 0 0 0 1 1h2.53L9.692 14.45a1 1 0 0 1 .976-.783h13.666Zm-15.086 12h15.815a1 1 0 0 0 .976-.783l2.049-9.217H11.469l-2.222 10Z"
    />
  </Svg>
);

export default NavigationDocuments2XIcon;
