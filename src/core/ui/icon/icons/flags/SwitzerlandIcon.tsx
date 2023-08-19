import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SwitzerlandIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#D80027"
      />
      <Path
        d="M36.523 19.826h-8.348v-8.348h-8.348v8.348H11.48v8.348h8.348v8.348h8.348v-8.348h8.348v-8.348Z"
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

export default SwitzerlandIcon;
