import Svg, {Path, SvgProps} from 'react-native-svg';

const AccountsPayableIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2a2 2 0 0 0-2 2v5a1 1 0 0 0 2 0V4h5.586L17 8.414V20H7v-3a1 1 0 1 0-2 0v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Zm6.925 10.619a.994.994 0 0 0-.218-.326l-3-3a1 1 0 0 0-1.414 1.414L10.586 12H3a1 1 0 1 0 0 2h7.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a.997.997 0 0 0 .293-.695v-.024a.998.998 0 0 0-.075-.37Z"
    />
  </Svg>
);

export default AccountsPayableIcon;
