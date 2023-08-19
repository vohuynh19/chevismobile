import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BurkinaFasoIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24c-1.043 0-24 3.13-24 3.13L0 24Z"
        fill="#D80027"
      />
      <Path d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24" fill="#6DA544" />
      <Path
        d="m24 15.652 1.813 5.58h5.867l-4.747 3.449 1.813 5.58L24 26.812l-4.747 3.449 1.813-5.58-4.746-3.449h5.867L24 15.652Z"
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

export default BurkinaFasoIcon;
