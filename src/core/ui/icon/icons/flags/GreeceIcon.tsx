import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const GreeceIcon = ({
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
      <G fill="#338AF3">
        <Path d="M24 17.74h23.173a23.866 23.866 0 0 0-2.696-6.262H24v6.261ZM9.06 42.783h29.88a24.12 24.12 0 0 0 5.537-6.261H3.522a24.126 24.126 0 0 0 5.538 6.26ZM8.348 5.807a24.117 24.117 0 0 0-4.826 5.671h4.826V5.807ZM24 24v-6.26h-9.391V24H8.348v-6.26H.827A24.026 24.026 0 0 0 0 24c0 2.166.289 4.265.827 6.26h46.346c.538-1.995.827-4.094.827-6.26H24Z" />
        <Path d="M24 0c-3.333 0-6.507.68-9.392 1.908v9.57H24v-6.26h14.94A23.898 23.898 0 0 0 24 0Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GreeceIcon;
