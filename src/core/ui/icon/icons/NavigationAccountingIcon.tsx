import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationAccountingIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M5 3a1 1 0 0 1 1-1h6.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V20a2 2 0 0 1-2 2H6a1 1 0 1 1 0-2h11V8.414L12.586 4H6a1 1 0 0 1-1-1Z" />
      <Path d="M10.793 10.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H7.5a1 1 0 1 1 0-2h4.086l-.793-.793a1 1 0 0 1 0-1.414ZM5.207 6.793a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414-1.414L4.414 11H9a1 1 0 1 0 0-2H4.414l.793-.793a1 1 0 0 0 0-1.414Z" />
    </G>
  </Svg>
);

export default NavigationAccountingIcon;
