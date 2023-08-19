import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SloveniaIcon = ({
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
        d="M46.507 15.652H20.87v-6.26H8.348v6.26H1.493A23.948 23.948 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348Z"
        fill="#0052B4"
      />
      <Path
        d="M24.001 48c10.32 0 19.116-6.513 22.507-15.652H1.494C4.884 41.487 13.682 48 24 48Z"
        fill="#D80027"
      />
      <Path
        d="M8.348 15.652v2.087c0 4.793 6.26 6.261 6.26 6.261s6.262-1.468 6.262-6.26v-2.088l-2.087 2.087-4.174-3.13-4.174 3.13-2.087-2.087Z"
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

export default SloveniaIcon;
