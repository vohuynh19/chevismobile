import Svg, {Path, SvgProps} from 'react-native-svg';

const DeactivateIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.071 5.698a8 8 0 0 1 11.23 11.23L7.072 5.699Zm-1.409 1.42a8 8 0 0 0 11.22 11.22L5.662 7.118ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
    />
  </Svg>
);

export default DeactivateIcon;
