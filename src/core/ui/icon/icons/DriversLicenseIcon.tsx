import Svg, {Path, SvgProps} from 'react-native-svg';

const DriversLicenseIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.223 10a9.003 9.003 0 0 1 17.554 0H3.223Zm-.168 3a9.005 9.005 0 0 0 7.445 7.876V16a3 3 0 0 0-3-3H3.055Zm17.89 0a9.006 9.006 0 0 1-7.445 7.876V16a3 3 0 0 1 3-3h4.445ZM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </Svg>
);

export default DriversLicenseIcon;
