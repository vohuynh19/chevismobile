import Svg, {Path, SvgProps} from 'react-native-svg';

const FitToWidthIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4Zm-2 0v16H4V4h16Zm-6.659 3.247a1 1 0 0 1 1.412.095l3.49 3.989A.991.991 0 0 1 18.5 12a.997.997 0 0 1-.257.67l-3.49 3.989a1 1 0 1 1-1.506-1.317L16.171 12l-2.924-3.341a1 1 0 0 1 .095-1.412Zm-4.094.095a1 1 0 0 1 1.506 1.317L7.829 12l2.924 3.341a1 1 0 0 1-1.506 1.318l-3.49-3.99a.992.992 0 0 1-.257-.672.998.998 0 0 1 .257-.666l3.49-3.99Z"
    />
  </Svg>
);

export default FitToWidthIcon;
