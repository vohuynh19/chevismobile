import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const GuernseyIcon = ({
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
        d="M47.797 20.87H27.13V.203a24.24 24.24 0 0 0-6.261 0V20.87H.203a24.237 24.237 0 0 0 0 6.26H20.87v20.667a24.223 24.223 0 0 0 6.261 0V27.13h20.667a24.223 24.223 0 0 0 0-6.261Z"
        fill="#D80027"
      />
      <Path
        d="m30.783 25.043 1.565 1.044v-4.174l-1.565 1.044h-5.74v-5.74l1.044-1.565h-4.174l1.044 1.565v5.74h-5.74l-1.565-1.044v4.174l1.565-1.044h5.74v5.74l-1.044 1.565h4.174l-1.044-1.565v-5.74h5.74Z"
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

export default GuernseyIcon;
