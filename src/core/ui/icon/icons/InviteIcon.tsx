import Svg, {G, Path, SvgProps} from 'react-native-svg';

const InviteIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V8.317l-6.35 5.442a1 1 0 0 1-1.3 0L5 8.317V17h3a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2V7Zm3.537 0L12 11.683 17.463 7H6.537Zm10.756 7.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 19H12a1 1 0 1 1 0-2h6.586l-1.293-1.293a1 1 0 0 1 0-1.414Z" />
      <Path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V8.317l-6.35 5.442a1 1 0 0 1-1.3 0L5 8.317V17h3a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2V7Zm3.537 0L12 11.683 17.463 7H6.537Zm10.756 7.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 19H12a1 1 0 1 1 0-2h6.586l-1.293-1.293a1 1 0 0 1 0-1.414Z" />
    </G>
  </Svg>
);

export default InviteIcon;
