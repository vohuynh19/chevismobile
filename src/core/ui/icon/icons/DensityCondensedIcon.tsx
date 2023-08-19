import Svg, {Path, SvgProps} from 'react-native-svg';

const DensityCondensedIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.75a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5Zm0 10.5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm-1-6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 2.5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
    />
  </Svg>
);

export default DensityCondensedIcon;
