import Svg, {Path, SvgProps} from 'react-native-svg';

const FinishIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h6.268A2 2 0 0 1 14.2 3.483L14.34 4H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3.758a2 2 0 0 1-1.763-1.056L12.973 12H6v8a1 1 0 1 1-2 0V4Zm2 6h6.973a2 2 0 0 1 1.763 1.056l.506.944H19V6h-4.661a2 2 0 0 1-1.932-1.483L12.268 4H6v6Z"
    />
  </Svg>
);

export default FinishIcon;
