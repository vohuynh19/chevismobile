import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MaltaIcon = ({
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
      <Path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48" fill="#D80027" />
      <Path
        d="M16.695 9.391v-3.13h-3.13v3.13h-3.13v3.13h3.13v3.131h3.13v-3.13h3.13v-3.13h-3.13Z"
        fill="#ACABB1"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MaltaIcon;
