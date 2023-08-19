import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const KazakhstanIcon = ({
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
        d="M37.565 24.26h-27.13c0 1.874 1.63 3.392 3.503 3.392h-.113a3.391 3.391 0 0 0 3.392 3.392 3.391 3.391 0 0 0 3.391 3.39h6.783a3.391 3.391 0 0 0 3.391-3.39 3.391 3.391 0 0 0 3.391-3.392h-.113c1.873 0 3.505-1.518 3.505-3.391Z"
        fill="#FFDA44"
      />
      <Path d="M33.391 19.826a9.391 9.391 0 1 1-18.782 0" fill="#338AF3" />
      <Path
        d="m31.174 19.826-2.931 1.379 1.56 2.839-3.182-.61-.403 3.216L24 24.285l-2.217 2.365-.404-3.215-3.182.608 1.56-2.838-2.93-1.379 2.93-1.379-1.56-2.838 3.182.609.404-3.216L24 15.367l2.217-2.365.403 3.216 3.183-.61-1.561 2.84 2.93 1.378Z"
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

export default KazakhstanIcon;
