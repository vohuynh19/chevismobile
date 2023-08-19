import Svg, {Path, SvgProps} from 'react-native-svg';

const LogOutIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5a1 1 0 0 0-1-1H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a1 1 0 1 0 0-2H8V6h7a1 1 0 0 0 1-1Zm-5 7a1 1 0 0 1 1-1h5.545l-1.252-1.252a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.627 13H12a1 1 0 0 1-1-1Z"
    />
  </Svg>
);

export default LogOutIcon;
