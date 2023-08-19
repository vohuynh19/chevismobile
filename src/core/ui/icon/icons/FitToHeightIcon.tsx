import Svg, {Path, SvgProps} from 'react-native-svg';

const FitToHeightIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm0 2h16v16H4V4Zm3.247 6.659a1 1 0 0 1 .095-1.412l3.989-3.49A.993.993 0 0 1 12 5.5a.998.998 0 0 1 .67.257l3.989 3.49a1 1 0 1 1-1.317 1.506L12 7.829l-3.341 2.924a1 1 0 0 1-1.412-.095Zm.095 4.094a1 1 0 0 1 1.317-1.506L12 16.171l3.341-2.924a1 1 0 0 1 1.318 1.506l-3.99 3.49a.99.99 0 0 1-.672.257.997.997 0 0 1-.666-.257l-3.99-3.49Z"
    />
  </Svg>
);

export default FitToHeightIcon;
