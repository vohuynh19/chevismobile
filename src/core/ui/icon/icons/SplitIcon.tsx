import Svg, {Path, SvgProps} from 'react-native-svg';

const SplitIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm3.446 4.032a4 4 0 1 0-1.414 1.414l2.574 2.575-2.548 2.548a4 4 0 1 0 1.404 1.425L20.706 4.748a1 1 0 0 0-1.414-1.414l-7.272 7.272-2.575-2.574ZM6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7.793-2.166a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414Z"
    />
  </Svg>
);

export default SplitIcon;
