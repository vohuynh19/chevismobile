import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const CambodiaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24c0 4.158 1.058 8.069 2.918 11.478L24 37.565l21.082-2.087A23.893 23.893 0 0 0 48 24c0-4.158-1.058-8.069-2.918-11.478L24 10.435 2.918 12.522A23.892 23.892 0 0 0 0 24Z"
        fill="#D80027"
      />
      <G fill="#0052B4">
        <Path d="M2.918 12.522h42.164C41.012 5.062 33.097 0 24 0 14.903 0 6.989 5.061 2.918 12.522ZM24 48c9.097 0 17.011-5.062 21.082-12.522H2.918C6.988 42.938 14.903 48 24 48Z" />
      </G>
      <Path
        d="M32.348 28.696v-3.13H30.26V21.39l-2.087-2.087-2.087 2.087v-4.174L24 15.13l-2.087 2.087v4.174l-2.087-2.087-2.087 2.087v4.174h-2.087v3.13h-2.087v3.131h20.87v-3.13h-2.087Z"
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

export default CambodiaIcon;
