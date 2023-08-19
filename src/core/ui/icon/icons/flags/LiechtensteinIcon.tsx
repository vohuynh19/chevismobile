import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const LiechtensteinIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24c1.043 0 24-3.13 24-3.13L48 24Z"
        fill="#D80027"
      />
      <Path d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24" fill="#0052B4" />
      <Path
        d="M17.739 16.696a3.13 3.13 0 0 0-5.218-2.333v-1.841h1.044v-2.087H12.52V9.39h-2.087v1.044H9.391v2.087h1.043v1.841a3.13 3.13 0 0 0-4.174 4.665v1.842h10.435v-1.842a3.122 3.122 0 0 0 1.044-2.332Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LiechtensteinIcon;
