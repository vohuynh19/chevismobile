import Svg, {Path, SvgProps} from 'react-native-svg';

const SyncIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.707 12.207a1 1 0 0 0-1.414-1.414L20 12.086V12A8 8 0 0 0 7.428 5.434a1 1 0 0 0 1.144 1.64A6 6 0 0 1 18 12v.087l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3Zm-21.414-.414a1 1 0 1 0 1.414 1.414L4 11.914V12a8 8 0 0 0 12.572 6.566 1 1 0 0 0-1.144-1.64A6 6 0 0 1 6 12v-.087l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3Z"
    />
  </Svg>
);

export default SyncIcon;
