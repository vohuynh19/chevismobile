import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const StLuciaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#338AF3"
      />
      <Path d="M15.13 32.348h17.74L24 11.478l-8.87 20.87Z" fill="#F3F3F3" />
      <Path d="m18.214 30.26 5.787-13.163 5.787 13.164H18.215Z" fill="#333" />
      <Path d="M15.13 32.348h17.74L24 24l-8.87 8.348Z" fill="#FFDA44" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default StLuciaIcon;
