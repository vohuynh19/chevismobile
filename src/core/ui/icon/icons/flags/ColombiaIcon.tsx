import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const ColombiaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24l-24 2.087L0 24Z"
        fill="#FFDA44"
      />
      <Path
        d="M3.212 36C7.362 43.173 15.117 48 24 48c8.883 0 16.639-4.827 20.789-12L24 34.435 3.212 36Z"
        fill="#D80027"
      />
      <Path
        d="M44.788 36A23.889 23.889 0 0 0 48 24H0c0 4.372 1.17 8.47 3.212 12h41.576Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ColombiaIcon;
