import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationAccountsReceivableIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1.5a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0v-3h5.586L17 7.914V19.5H7v-1a1 1 0 1 0-2 0v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.914a2 2 0 0 0-.586-1.414L14 2.086a2 2 0 0 0-1.414-.586H7ZM5.293 8.793a1 1 0 0 1 1.414 1.414L5.414 11.5H13a1 1 0 1 1 0 2H5.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a.998.998 0 0 1 .001-1.415m2.999-3-2.999 3 2.999-3Z"
    />
  </Svg>
);

export default NavigationAccountsReceivableIcon;
