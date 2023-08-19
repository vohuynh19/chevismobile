import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationArchiveIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 6H4v2h16V6ZM2 8a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2Zm4 2h12v8H6v-8Zm3 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
    />
  </Svg>
);

export default NavigationArchiveIcon;
