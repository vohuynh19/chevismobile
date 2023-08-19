import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const Creditcard2Icon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1h16v3H4v6a1 1 0 0 0 1 1h5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V7Zm4 8a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
    />
    <Circle cx={15} cy={17} r={3} />
    <Circle cx={19} cy={17} r={3} />
  </Svg>
);

export default Creditcard2Icon;
