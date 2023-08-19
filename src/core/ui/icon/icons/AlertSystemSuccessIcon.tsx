import Svg, {Path, SvgProps} from 'react-native-svg';

const AlertSystemSuccessIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.001 11.86a8 8 0 0 1 11.79-6.907 1 1 0 1 0 .95-1.76 9.962 9.962 0 0 0-4.566-1.191C6.653 1.905 2.098 6.303 2.002 11.825 1.905 17.349 6.303 21.902 11.825 22c5.523.096 10.077-4.302 10.174-9.824a10.06 10.06 0 0 0-.11-1.668 1 1 0 0 0-1.977.296 8 8 0 1 1-15.91 1.057Zm15.706-4.153a1 1 0 1 0-1.414-1.414L11 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l8-8Z"
    />
  </Svg>
);

export default AlertSystemSuccessIcon;
