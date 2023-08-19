import Svg, {Path, SvgProps} from 'react-native-svg';

const SessionsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3a1 1 0 0 0-2 0v1.041H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.329a9.016 9.016 0 0 1-1.373-2H5V11.5h3.204a9.036 9.036 0 0 1 1.571-2H5V6.041h3V7a1 1 0 0 0 2 0v-.959h4V7a1 1 0 0 0 .024.218A9.03 9.03 0 0 1 16 7v-.959h3v1.471c.712.252 1.383.59 2 1.004V6.04a2 2 0 0 0-2-2h-3V3a1 1 0 1 0-2 0v1.041h-4V3Zm10 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-3.879 2.121A3 3 0 0 0 16 13v3l2.121 2.121Z"
    />
  </Svg>
);

export default SessionsIcon;
