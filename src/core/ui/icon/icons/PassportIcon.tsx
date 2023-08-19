import Svg, {Path, SvgProps} from 'react-native-svg';

const PassportIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2a2 2 0 0 1 2-2h14a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a2 2 0 0 1-2-2V2Zm16 0H4v20h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM9 18.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
    />
  </Svg>
);

export default PassportIcon;
