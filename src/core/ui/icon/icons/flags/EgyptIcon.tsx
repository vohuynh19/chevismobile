import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const EgyptIcon = ({
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
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#D80027"
      />
      <Path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#000"
      />
      <Path
        d="M32.348 21.391h-6.261a2.087 2.087 0 0 0-4.174 0h-6.261c0 1.153 1.004 2.087 2.156 2.087h-.07c0 1.153.935 2.087 2.088 2.087 0 1.153.934 2.087 2.087 2.087h4.174a2.087 2.087 0 0 0 2.087-2.087 2.087 2.087 0 0 0 2.087-2.087h-.07c1.153 0 2.157-.934 2.157-2.087Z"
        fill="#FF9811"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EgyptIcon;
