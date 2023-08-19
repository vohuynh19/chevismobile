import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const PakistanIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <G fill="#F0F0F0">
        <Path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z" />
        <Path d="M0 24c0 9.097 5.061 17.011 12.522 21.082V2.918C5.062 6.988 0 14.903 0 24Z" />
      </G>
      <Path
        d="M23.999 0A23.893 23.893 0 0 0 12.52 2.918v42.164A23.892 23.892 0 0 0 24 48c13.255 0 24-10.745 24-24s-10.745-24-24-24Z"
        fill="#496E2D"
      />
      <G fill="#F0F0F0">
        <Path d="M34.262 27.97a6.782 6.782 0 1 1-4.852-12.224 8.348 8.348 0 1 0 6.99 9.674 6.75 6.75 0 0 1-2.138 2.55ZM34.132 15.652l1.71 1.844 2.282-1.057-1.224 2.196 1.71 1.843-2.467-.486-1.225 2.196-.3-2.496-2.467-.486 2.282-1.057-.3-2.497Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PakistanIcon;
