import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationAccounting2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M7 5a2 2 0 0 1 2-2h7.586A2 2 0 0 1 18 3.586L24.414 10A2 2 0 0 1 25 11.414V27a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2a1 1 0 1 1 2 0v2h14V11.414L16.586 5H9v2a1 1 0 0 1-2 0V5Z" />
      <Path d="M15.293 16.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 21H9a1 1 0 1 1 0-2h7.586l-1.293-1.293a1 1 0 0 1 0-1.414ZM6.707 10.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L5.414 15H13a1 1 0 1 0 0-2H5.414l1.293-1.293a1 1 0 0 0 0-1.414Z" />
    </G>
  </Svg>
);

export default NavigationAccounting2XIcon;
