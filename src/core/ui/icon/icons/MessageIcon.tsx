import Svg, {G, Path, SvgProps} from 'react-native-svg';

const MessageIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M20 6H4v10h.9c1.16 0 2.1.94 2.1 2.1v1.014l3.577-2.555A3 3 0 0 1 12.32 16H20V6ZM4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.68a1 1 0 0 0-.58.186L6.58 21.87A1 1 0 0 1 5 21.058V18.1a.1.1 0 0 0-.1-.1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <Path d="M20 6H4v10h.9c1.16 0 2.1.94 2.1 2.1v1.014l3.577-2.555A3 3 0 0 1 12.32 16H20V6ZM4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.68a1 1 0 0 0-.58.186L6.58 21.87A1 1 0 0 1 5 21.058V18.1a.1.1 0 0 0-.1-.1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </G>
  </Svg>
);

export default MessageIcon;
