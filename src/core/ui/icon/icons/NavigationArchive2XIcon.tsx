import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationArchive2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 7H5v4h22V7ZM5 5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Zm2 8v12h18V13H7Zm4 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H11Z"
    />
  </Svg>
);

export default NavigationArchive2XIcon;
