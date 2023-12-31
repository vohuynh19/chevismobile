import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const NatoIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#0052B4"
      />
      <Path
        d="M34.3 25.674 38.609 24 34.3 22.326l-2.367-.92-3.845-1.494-1.494-3.845a8.384 8.384 0 0 1 5.34 5.34l2.366.919a10.46 10.46 0 0 0-8.626-8.626L24 9.391l-1.674 4.31a10.46 10.46 0 0 0-8.626 8.625L9.391 24l4.31 1.674a10.46 10.46 0 0 0 8.625 8.626L24 38.609l1.674-4.31a10.46 10.46 0 0 0 8.626-8.625Zm-7.824-4.15L24 24h8.847l-6.371 2.476L24 24v8.847l-2.476-6.371L24 24h-8.847l6.371-2.476L24 24v-8.847l2.476 6.371Zm-5.07-5.457-1.494 3.845-3.845 1.494a8.384 8.384 0 0 1 5.34-5.339Zm-5.339 10.527 3.845 1.494 1.494 3.845a8.384 8.384 0 0 1-5.339-5.339Zm10.527 5.34 1.494-3.846 3.845-1.494a8.384 8.384 0 0 1-5.339 5.34Z"
        fill="#F0F0F0"
      />
      <G fill="#0052B4">
        <Path d="M32.847 24H24l2.476 2.476L32.846 24ZM15.153 24H24l-2.476-2.476L15.154 24ZM24 32.847V24l-2.476 2.476L24 32.846ZM24 24l2.476-2.476L24 15.154V24Z" />
      </G>
      <G fill="#F0F0F0">
        <Path d="M25.044 3.13h-2.087v4.174h2.087V3.13ZM7.305 22.956H3.13v2.088h4.174v-2.088ZM25.044 40.696h-2.087v4.174h2.087v-4.174ZM44.87 22.956h-4.173v2.088h4.174v-2.088Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NatoIcon;
