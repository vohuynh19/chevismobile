import Svg, {Path, SvgProps} from 'react-native-svg';

const BanqupIdIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.1.764 8.4 7.8v6.825l-5.86 6.394-3.05 1.83-3.233-1.293-2.984-4.178L11.1.764Zm.8 3.472L6.627 17.858l2.016 2.822 1.768.707 1.95-1.17 5.139-5.606V9.436l-5.6-5.2Z"
    />
  </Svg>
);

export default BanqupIdIcon;
