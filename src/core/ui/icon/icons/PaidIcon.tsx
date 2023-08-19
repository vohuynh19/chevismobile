import Svg, {G, Path, SvgProps} from 'react-native-svg';

const PaidIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a1 1 0 1 0-2 0v8H4v-7h6a1.5 1.5 0 0 0 0-3H4V6h4a1 1 0 0 0 0-2H4Zm2 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm10-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z" />
      <Path d="M22.707 1.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L16 6.586l5.293-5.293a1 1 0 0 1 1.414 0Z" />
    </G>
  </Svg>
);

export default PaidIcon;
