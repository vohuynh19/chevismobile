import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const NauruIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#0052B4"
      />
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <G fill="#0052B4">
        <Path d="M23.999 0C11.447 0 1.148 9.636.09 21.913h47.817C46.85 9.636 36.55 0 24 0ZM23.999 48c12.551 0 22.85-9.636 23.908-21.913H.09C1.148 38.364 11.447 48 23.999 48Z" />
      </G>
      <Path
        d="m19.828 32.348-2.69 1.265 1.432 2.604-2.92-.558-.37 2.95-2.034-2.17-2.034 2.17-.37-2.95-2.92.558 1.432-2.604-2.69-1.265 2.69-1.265-1.432-2.605 2.92.559.37-2.95 2.034 2.17 2.034-2.17.37 2.95 2.92-.559-1.431 2.605 2.689 1.265Z"
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

export default NauruIcon;
