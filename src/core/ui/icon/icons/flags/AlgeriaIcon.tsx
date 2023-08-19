import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const AlgeriaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48c0-1.043-3.13-24-3.13-24L24 0Z"
        fill="#F0F0F0"
      />
      <Path d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0" fill="#496E2D" />
      <G fill="#D80027">
        <Path d="m29.157 19.396-1.97 2.714-3.189-1.034 1.973 2.711L24 26.501l3.189-1.038 1.972 2.71-.002-3.352 3.188-1.038-3.19-1.034-.001-3.352Z" />
        <Path d="M25.991 30.783a6.783 6.783 0 1 1 3.226-12.75 8.348 8.348 0 1 0 0 11.934c-.959.52-2.058.816-3.226.816Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AlgeriaIcon;
