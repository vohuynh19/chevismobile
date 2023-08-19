import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const AntiguaAndBarbudaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24c0 1.644.166 3.25.48 4.8L24 30.26l23.52-1.46c.314-1.55.48-3.156.48-4.8 0-1.644-.166-3.25-.48-4.8L24 17.739.48 19.2A24.103 24.103 0 0 0 0 24Z"
        fill="#0052B4"
      />
      <Path
        d="M47.52 28.8H.48C2.705 39.755 12.39 48 24 48s21.296-8.245 23.52-19.2Z"
        fill="#F0F0F0"
      />
      <Path
        d="M.48 19.2h47.04C45.296 8.245 35.61 0 24 0 12.39 0 2.704 8.245.48 19.2Z"
        fill="#000"
      />
      <Path
        d="M34.435 19.2h-20.87l4.264-2.006-2.27-4.129 4.63.886.586-4.678L24 12.713l3.225-3.44.586 4.678 4.63-.886-2.27 4.13 4.264 2.005Z"
        fill="#FFDA44"
      />
      <G fill="#A2001D">
        <Path d="M0 24c0 13.255 10.745 24 24 24L4.8 9.6A23.893 23.893 0 0 0 0 24ZM24 48c13.255 0 24-10.745 24-24 0-5.404-1.786-10.39-4.8-14.4L24 48Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AntiguaAndBarbudaIcon;
