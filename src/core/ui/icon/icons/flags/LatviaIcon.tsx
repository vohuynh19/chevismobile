import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const LatviaIcon = ({
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
      <G fill="#A2001D">
        <Path d="M24 0C12.913 0 3.582 7.52.828 17.74h46.347C44.42 7.52 35.089 0 24 0ZM24 48c11.09 0 20.42-7.52 23.174-17.739H.827c2.754 10.218 12.085 17.74 23.174 17.74Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LatviaIcon;
