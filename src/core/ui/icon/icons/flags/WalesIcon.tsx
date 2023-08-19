import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const WalesIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <Path d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24" fill="#496E2D" />
      <Path
        d="M41.533 16.7a6.263 6.263 0 0 0-5.905-4.178H30.26A6.261 6.261 0 0 0 24 18.782c0 1.13.3 2.216.824 3.131-1.993-.016-3.837.014-4.998 0v-6.134l.247-.247c1.107-1.107.737-2.951.737-2.951s-1.844-.369-2.95.738l-1.29 1.29h-1.44c-3.17 0-5.739 2.57-5.739 5.739h4.174v4.695c0 .687.139 1.341.389 1.937l-1.432 1.194h-2.087v-2.087H8.348v4.174h9.391v4.174h-2.087v2.087h4.174v-4.174l1.913-2.296h4.522l1.913 2.296v2.087h-2.087v2.087h8.348V25.043a3.13 3.13 0 0 1 3.263-3.127 4.176 4.176 0 0 1 3.835-5.215ZM30.26 34.436v-4.383h.174l1.913 2.296v2.087H30.26Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WalesIcon;
