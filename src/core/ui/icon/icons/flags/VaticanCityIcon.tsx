import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const VaticanCityIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 0c13.254 0 24 10.745 24 24S37.254 48 24 48c0-1.043-3.13-24-3.13-24L24 0Z"
        fill="#F0F0F0"
      />
      <Path d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0" fill="#FFDA44" />
      <Path
        d="m33.19 20.884 4.511 5.967a3.131 3.131 0 1 0 1.665-1.258l-7.03-9.3-1.664 1.259-2.498 1.887 2.517 3.33 2.5-1.885Zm6.494 6.86a1.044 1.044 0 1 1 1.259 1.665 1.044 1.044 0 0 1-1.259-1.665Z"
        fill="#ACABB1"
      />
      <Path
        d="m40.928 22.769 2.517-3.33-2.497-1.887-1.665-1.259-7.03 9.3a3.131 3.131 0 1 0 1.665 1.258l4.51-5.967 2.5 1.885Zm-8.79 6.437a1.043 1.043 0 1 1-1.664-1.259 1.043 1.043 0 0 1 1.664 1.259Z"
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

export default VaticanCityIcon;
