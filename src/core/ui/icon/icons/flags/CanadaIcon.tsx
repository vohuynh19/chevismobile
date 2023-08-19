import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const CanadaIcon = ({
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
      <G fill="#D80027">
        <Path d="M48 24c0-9.515-5.537-17.737-13.565-21.619v43.237C42.463 41.737 48 33.515 48 24ZM0 24c0 9.515 5.537 17.737 13.565 21.619V2.38C5.537 6.263 0 14.485 0 24ZM28.174 27.13l4.174-2.086L30.26 24v-2.087L26.087 24l2.087-4.174h-2.087L24 16.696l-2.087 3.13h-2.087L21.913 24l-4.174-2.087V24l-2.087 1.044 4.174 2.087-1.043 2.087h4.173v3.13h2.087v-3.13h4.174l-1.043-2.087Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CanadaIcon;
