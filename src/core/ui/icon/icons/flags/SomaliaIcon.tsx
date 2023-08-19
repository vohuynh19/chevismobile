import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SomaliaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#338AF3"
      />
      <Path
        d="m24 12.522 2.59 7.971h8.382L28.19 25.42l2.59 7.971-6.78-4.926-6.782 4.926 2.59-7.971-6.78-4.927h8.381L24 12.522Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SomaliaIcon;
