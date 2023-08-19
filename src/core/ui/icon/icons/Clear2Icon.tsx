import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

const Clear2Icon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Rect x={2} y={2} width={20} height={20} rx={10} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.195 8.195c.26-.26.683-.26.943 0L12 11.057l2.862-2.862a.667.667 0 1 1 .943.943L12.943 12l2.862 2.862a.667.667 0 1 1-.943.943L12 12.943l-2.862 2.862a.667.667 0 1 1-.943-.943L11.057 12 8.195 9.138a.667.667 0 0 1 0-.943Z"
    />
  </Svg>
);

export default Clear2Icon;
