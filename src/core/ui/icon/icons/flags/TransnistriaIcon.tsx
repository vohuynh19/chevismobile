import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const TransnistriaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <G fill="#A2001D">
        <Path d="M47.172 17.74C44.418 7.52 35.087 0 23.999 0 12.91 0 3.579 7.52.826 17.74l23.173 1.043 23.173-1.044ZM.826 30.26C3.58 40.48 12.91 48 23.999 48c11.088 0 20.419-7.52 23.173-17.74l-23.173-1.043L.826 30.261Z" />
      </G>
      <Path
        d="M47.173 17.739H.827A24.026 24.026 0 0 0 0 23.999c0 2.167.289 4.266.827 6.262h46.346C47.711 28.265 48 26.166 48 24c0-2.166-.289-4.265-.827-6.261Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TransnistriaIcon;
