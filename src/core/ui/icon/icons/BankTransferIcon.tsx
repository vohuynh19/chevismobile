import Svg, {G, Path, SvgProps} from 'react-native-svg';

const BankTransferIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M19.832 11.445a1 1 0 0 0-1.664 1.11L19.131 14H11a1 1 0 1 0 0 2h10a1 1 0 0 0 .832-1.555l-2-3Zm-7.664 11.11a1 1 0 1 0 1.664-1.11L12.868 20H21a1 1 0 1 0 0-2H11a1 1 0 0 0-.832 1.555l2 3Z" />
      <Path d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1h10.5a1.5 1.5 0 0 1 0 3H4v6a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V7Zm4 8a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z" />
    </G>
  </Svg>
);

export default BankTransferIcon;
