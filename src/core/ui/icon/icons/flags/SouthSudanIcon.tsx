import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SouthSudanIcon = ({
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
        d="M46.128 14.696C42.494 6.062 33.956 0 24.001 0A23.922 23.922 0 0 0 7.03 7.03l6.01 7.666h33.087Z"
        fill="#000"
      />
      <Path
        d="M13.11 33.217 7.03 40.97A23.922 23.922 0 0 0 24 48c9.99 0 18.552-6.103 22.165-14.783H13.11Z"
        fill="#496E2D"
      />
      <Path
        d="M5.217 17.652v12.609h41.956C47.711 28.265 48 26.166 48 24c0-2.198-.296-4.326-.85-6.348H5.217Z"
        fill="#A2001D"
      />
      <Path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#0052B4"
      />
      <Path
        d="m7.818 18.033 2.93 4.087 4.793-1.522-2.982 4.049 2.929 4.088-4.773-1.585-2.982 4.049.032-5.03-4.772-1.584 4.793-1.523.032-5.029Z"
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

export default SouthSudanIcon;
