import Svg, {Path, SvgProps} from 'react-native-svg';

const AlertSystemErrorIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.33 12.894a2 2 0 0 1 0-1.788l3.5-7A2 2 0 0 1 7.617 3h8.764a2 2 0 0 1 1.789 1.106l3.5 7a2 2 0 0 1 0 1.788l-3.5 7A2 2 0 0 1 16.382 21H7.618a2 2 0 0 1-1.789-1.106l-3.5-7ZM7.617 5l-3.5 7 3.5 7h8.764l3.5-7-3.5-7H7.618Zm.675 3.293a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 0-1.414Z"
    />
  </Svg>
);

export default AlertSystemErrorIcon;
