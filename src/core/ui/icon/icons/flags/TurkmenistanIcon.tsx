import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const TurkmenistanIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <G fill="#496E2D">
        <Path d="M24 0c-1.793 0-3.538.198-5.218.57L17.738 24l1.044 23.43c1.68.372 3.425.57 5.217.57 13.255 0 24-10.745 24-24S37.254 0 24 0ZM6.26 7.835A23.912 23.912 0 0 0 0 24c0 6.227 2.371 11.9 6.26 16.165L7.304 24 6.26 7.835Z" />
      </G>
      <G fill="#F0F0F0">
        <Path d="M35.102 18.103A7.306 7.306 0 0 0 32.11 9.45a7.304 7.304 0 1 1-4.819 13.43 7.305 7.305 0 0 0 7.811-4.777ZM28.554 8.547l-1.026 1.326-1.578-.566.944 1.386-1.026 1.325 1.609-.47.944 1.386.05-1.675 1.61-.47-1.578-.566.05-1.676Z" />
        <Path d="m31.324 12.867-1.026 1.326-1.578-.566.944 1.385-1.026 1.326 1.61-.47.943 1.386.051-1.676 1.61-.469-1.578-.566.05-1.676ZM23.669 10.12l-1.027 1.327-1.577-.566.943 1.385-1.026 1.326 1.61-.47.943 1.386.051-1.676 1.61-.47-1.578-.566.05-1.675ZM23.556 15.07l-1.026 1.325-1.578-.566.944 1.385-1.026 1.326 1.61-.47.943 1.386.05-1.676 1.61-.47-1.578-.565.051-1.676ZM28.264 16.759l-1.026 1.325-1.578-.566.944 1.386-1.026 1.325 1.61-.47.943 1.386.051-1.675 1.61-.47-1.579-.566.051-1.675Z" />
      </G>
      <Path
        d="M6.26 7.835v32.33a23.975 23.975 0 0 0 12.522 7.264V.57A23.974 23.974 0 0 0 6.261 7.835Z"
        fill="#D80027"
      />
      <Path
        d="m11.039 12.636-2.096-1.562V8.866l2.096-1.562h2.965L16.1 8.866v2.208l-2.096 1.562h-2.965Z"
        fill="#F0F0F0"
      />
      <G fill="#FF9811">
        <Path d="M12.521 7.304H11.04L8.943 8.866v1.08h3.578V7.304ZM12.521 12.636h1.483l2.096-1.561V9.947h-3.579v2.688Z" />
      </G>
      <Path
        d="m11.039 40.696-2.096-1.562v-2.209l2.096-1.561h2.965l2.096 1.562v2.208l-2.096 1.562h-2.965Z"
        fill="#F0F0F0"
      />
      <G fill="#FF9811">
        <Path d="M12.521 35.364H11.04l-2.096 1.562v1.08h3.578v-2.642ZM12.521 40.696h1.483l2.096-1.562v-1.127h-3.579v2.689Z" />
      </G>
      <G fill="#496E2D">
        <Path d="m11.04 26.666-2.096-1.562v-2.208l2.097-1.562h2.964l2.097 1.562v2.208l-2.097 1.562h-2.964ZM16.174 30.102h-.913v-.913h-1.604l-1.135-1.135-1.134 1.135H9.783v.913H8.87v1.826h.913v.913h1.605l1.134 1.134 1.135-1.134h1.604v-.913h.913v-1.826ZM16.174 16.072h-.913v-.913h-1.604l-1.135-1.135-1.134 1.135H9.783v.913H8.87v1.826h.913v.913h1.605l1.134 1.135 1.135-1.135h1.604v-.913h.913v-1.826Z" />
      </G>
      <G fill="#D80027">
        <Path d="M13.566 22.956h-2.087v2.087h2.087v-2.087ZM12.522 18.028a1.043 1.043 0 1 0 0-2.087 1.043 1.043 0 0 0 0 2.087ZM12.522 32.059a1.043 1.043 0 1 0 0-2.087 1.043 1.043 0 0 0 0 2.087Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TurkmenistanIcon;
