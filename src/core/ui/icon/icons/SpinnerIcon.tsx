import Svg, {Path, SvgProps} from 'react-native-svg';

const SpinnerIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.062 4.65A8 8 0 1 0 12 20.041a1 1 0 1 1 0 2 10 10 0 1 1 10-10 1 1 0 1 1-2 0 8 8 0 0 0-4.938-7.391Z"
    />
  </Svg>
);

export default SpinnerIcon;
