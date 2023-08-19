import Svg, {Path, SvgProps} from 'react-native-svg';

const AlertSystemWarningIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.303 3.478c.74-1.304 2.654-1.304 3.394 0l8.056 14.198c.719 1.267-.217 2.824-1.697 2.824H3.944c-1.48 0-2.416-1.557-1.697-2.824l8.056-14.198ZM12 4.4 3.944 18.599h16.112L12 4.401Zm0 4.258a.96.96 0 0 1 .97.95v3.288a.96.96 0 0 1-.97.95.96.96 0 0 1-.97-.95V9.61a.96.96 0 0 1 .97-.95Zm.97 7.565a.96.96 0 0 0-.97-.95.96.96 0 0 0-.97.95v.019c0 .524.434.95.97.95a.96.96 0 0 0 .97-.95v-.02Z"
    />
  </Svg>
);

export default AlertSystemWarningIcon;
