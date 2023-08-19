import Svg, {G, Path, SvgProps} from 'react-native-svg';

const InboxIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M13 3a1 1 0 1 0-2 0v7.586L9.707 9.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 10.586V3ZM2 14a2 2 0 0 1 2-2h1.444a2 2 0 0 1 2 2v2h9.112v-2a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm2 0v6h16v-6h-1.444v2a2 2 0 0 1-2 2H7.444a2 2 0 0 1-2-2v-2H4Z" />
      <Path d="M13 3a1 1 0 1 0-2 0v7.586L9.707 9.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 10.586V3ZM2 14a2 2 0 0 1 2-2h1.444a2 2 0 0 1 2 2v2h9.112v-2a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm2 0v6h16v-6h-1.444v2a2 2 0 0 1-2 2H7.444a2 2 0 0 1-2-2v-2H4Z" />
    </G>
  </Svg>
);

export default InboxIcon;
