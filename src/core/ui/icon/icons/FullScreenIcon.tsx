import Svg, {Path, SvgProps} from 'react-native-svg';

const FullScreenIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414-1.414L18.586 4H15ZM6 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8v9h9v-3a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6ZM3 9a1 1 0 0 1 1 1v10h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z"
    />
  </Svg>
);

export default FullScreenIcon;
