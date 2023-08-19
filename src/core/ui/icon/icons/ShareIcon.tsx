import Svg, {Path, SvgProps} from 'react-native-svg';

const ShareIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.455 6.273a4.273 4.273 0 1 1 1.004 2.752l-4.023 2.011a4.285 4.285 0 0 1 .017 1.854l4.055 2.027a4.273 4.273 0 1 1-.927 1.773L9.59 14.694a4.273 4.273 0 1 1-.049-5.447l4.024-2.01a4.284 4.284 0 0 1-.11-.964ZM17.727 4a2.273 2.273 0 1 0 0 4.545 2.273 2.273 0 0 0 0-4.545ZM4 12a2.273 2.273 0 1 1 4.545 0A2.273 2.273 0 0 1 4 12Zm11.455 5.727a2.273 2.273 0 1 1 4.545 0 2.273 2.273 0 0 1-4.545 0Z"
    />
  </Svg>
);

export default ShareIcon;
