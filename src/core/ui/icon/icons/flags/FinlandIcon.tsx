import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const FinlandIcon = ({
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
        d="M47.797 20.87H18.783V.57a23.838 23.838 0 0 0-6.261 2.348V20.87H.203a24.205 24.205 0 0 0 0 6.261h12.319v17.952a23.838 23.838 0 0 0 6.26 2.347V27.131h29.015a24.224 24.224 0 0 0 0-6.261Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FinlandIcon;
