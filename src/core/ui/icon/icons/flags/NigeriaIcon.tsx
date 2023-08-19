import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const NigeriaIcon = ({
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
      <G fill="#6DA544">
        <Path d="M0 24c0 10.32 6.513 19.116 15.652 22.507V1.493C6.513 4.883 0 13.68 0 24ZM48 24c0-10.319-6.513-19.116-15.652-22.507v45.014C41.487 43.117 48 34.32 48 24Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NigeriaIcon;
