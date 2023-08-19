import Svg, {Path, SvgProps} from 'react-native-svg';

const CalculatorIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2.041a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2H7Zm8 17h2v-2h-2v2Zm-2-2v2h-2v-2h2Zm2-2h2v-2h-2v2Zm-2-2v2h-2v-2h2Zm2-2h2v-2h-2v2Zm-2-2v2h-2v-2h2Zm4-2v-3H7v3h10Zm-8 12v-2H7v2h2Zm0-4v-2H7v2h2Zm0-4v-2H7v2h2Z"
    />
  </Svg>
);

export default CalculatorIcon;
