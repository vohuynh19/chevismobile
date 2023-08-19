import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationBankAccounts2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8h22v3H5V8Zm0 6v10h22V14H5ZM3 8a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm4 9a1 1 0 0 1 1-1h7.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm12-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7 21a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm7-1a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2H14Zm3 1a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1Zm6-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"
    />
  </Svg>
);

export default NavigationBankAccounts2XIcon;
