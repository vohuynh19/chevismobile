import Svg, {Path, SvgProps} from 'react-native-svg';

const DensityRegularIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5Zm0 8a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm-1-3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 7a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
    />
  </Svg>
);

export default DensityRegularIcon;
