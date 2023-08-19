import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const EnglandIcon = ({
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
        d="M47.797 20.87H27.13V.203a24.24 24.24 0 0 0-6.261 0V20.87H.203a24.237 24.237 0 0 0 0 6.261H20.87v20.667a24.223 24.223 0 0 0 6.261 0V27.13h20.667a24.22 24.22 0 0 0 0-6.261Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EnglandIcon;
