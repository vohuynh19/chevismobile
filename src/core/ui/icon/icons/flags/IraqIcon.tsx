import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const IraqIcon = ({
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
        fill="#A2001D"
      />
      <Path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#000"
      />
      <G fill="#496E2D">
        <Path d="M18.26 22.435h-4.626a2.089 2.089 0 0 1 2.018-1.566v-3.13a5.223 5.223 0 0 0-5.217 5.217v2.609h7.826c.288 0 .522.234.522.522v1.043H8.348v3.13h13.565v-4.173a3.656 3.656 0 0 0-3.652-3.652ZM26.088 27.13v-9.39h-3.13v12.52h5.217v-3.13h-2.087ZM36.521 27.13v-9.39h-3.13v9.39h-1.044V24h-3.13v6.261h9.391v-3.13h-2.087Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IraqIcon;
