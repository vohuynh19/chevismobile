import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MauritaniaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#496E2D"
      />
      <G fill="#FFDA44">
        <Path d="M24 27.727a8.35 8.35 0 0 1-8.154-6.56 8.348 8.348 0 1 0 16.307 0A8.35 8.35 0 0 1 24 27.728Z" />
        <Path d="m24 16.696.776 2.391h2.515l-2.034 1.478.777 2.392-2.035-1.479-2.034 1.479.777-2.392-2.034-1.478h2.514L24 16.696Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MauritaniaIcon;
