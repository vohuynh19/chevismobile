import Svg, {Path, SvgProps} from 'react-native-svg';

const BankAccounts15XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6h16v2H4V6Zm0 5v7h16v-7H4ZM2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4 9a1 1 0 0 1 1-1h5.5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm10-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"
    />
  </Svg>
);

export default BankAccounts15XIcon;
