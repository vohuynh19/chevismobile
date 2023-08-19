import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const UruguayIcon = ({
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
      <Path
        d="M24 17.74h23.173a23.864 23.864 0 0 0-2.696-6.262H24v6.261Z"
        fill="#338AF3"
      />
      <G fill="#338AF3">
        <Path d="M9.064 42.783h29.879a24.121 24.121 0 0 0 5.538-6.261H3.526a24.126 24.126 0 0 0 5.538 6.26ZM24 0v5.217h14.94A23.897 23.897 0 0 0 24 0Z" />
      </G>
      <Path
        d="M24 17.74h23.173a23.864 23.864 0 0 0-2.696-6.262H24v6.261ZM0 24c0 2.166.289 4.265.827 6.26h46.346c.538-1.995.827-4.094.827-6.26H0Z"
        fill="#338AF3"
      />
      <Path
        d="m20.87 14.046-2.93 1.379 1.56 2.838-3.183-.609-.403 3.216-2.217-2.365-2.217 2.365-.403-3.216-3.183.61 1.56-2.84-2.93-1.378 2.93-1.379-1.56-2.839 3.183.61.403-3.216 2.217 2.365 2.217-2.365.403 3.215 3.183-.609-1.56 2.84 2.93 1.378Z"
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

export default UruguayIcon;
