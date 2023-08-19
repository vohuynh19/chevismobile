import Svg, {Path, SvgProps} from 'react-native-svg';

const AmountDueOverdueIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.499 4a2 2 0 0 1 2-2h5.585a2 2 0 0 1 1.415.586L20.913 7a2 2 0 0 1 .586 1.414V20a2 2 0 0 1-2 2h-1.737a1.981 1.981 0 0 0 0-2h1.737V8.414L15.084 4H9.5v2.256a2.022 2.022 0 0 0-2 0V4Zm2.76 5.161c-.755-1.402-2.766-1.402-3.521 0l-5.326 9.89C.694 20.385 1.659 22 3.172 22h10.652c1.514 0 2.479-1.616 1.761-2.948l-5.325-9.89Zm-1.76.948L13.824 20H3.173l5.326-9.89Zm1 3.891a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0V14Zm0 4.041a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
);

export default AmountDueOverdueIcon;
