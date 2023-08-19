import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MexicoIcon = ({
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
        d="M48 24c0-9.515-5.538-17.737-13.566-21.619v43.237C42.462 41.737 48 33.515 48 24Z"
        fill="#D80027"
      />
      <G fill="#6DA544">
        <Path d="M0 24c0 9.515 5.537 17.737 13.565 21.619V2.38C5.537 6.263 0 14.485 0 24ZM17.74 24a6.261 6.261 0 0 0 12.521 0v-2.087H17.74V24Z" />
      </G>
      <Path
        d="M32.348 19.826h-6.261a2.087 2.087 0 0 0-4.174 0h-6.261c0 1.153 1.004 2.087 2.156 2.087h-.07c0 1.153.935 2.087 2.088 2.087 0 1.153.934 2.087 2.087 2.087h4.174A2.087 2.087 0 0 0 28.174 24a2.087 2.087 0 0 0 2.087-2.087h-.07c1.153 0 2.157-.934 2.157-2.087Z"
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

export default MexicoIcon;
