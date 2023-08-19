import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const Creditcard1Icon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={14.5} cy={15} r={2} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 6H4v2h16V6ZM4 18v-7h16v7H4ZM4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm3 10a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2H7Zm10 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
);

export default Creditcard1Icon;
