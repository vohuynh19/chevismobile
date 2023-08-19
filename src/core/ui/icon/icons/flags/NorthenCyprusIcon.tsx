import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const NorthenCyprusIcon = ({
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
      <G fill="#D80027">
        <Path d="M5.807 8.348a24.085 24.085 0 0 0-2.284 3.13h40.955a24.071 24.071 0 0 0-2.284-3.13H5.807ZM5.807 39.652h36.386a24.085 24.085 0 0 0 2.284-3.13H3.522a24.088 24.088 0 0 0 2.285 3.13ZM20.93 19.611l1.968 2.714 3.19-1.034L24.115 24l1.97 2.714-3.189-1.038-1.972 2.712.002-3.353-3.188-1.038 3.19-1.034.001-3.353Z" />
        <Path d="M15.556 30.783a6.783 6.783 0 1 1 3.226-12.75 8.348 8.348 0 1 0 0 11.935 6.75 6.75 0 0 1-3.226.815Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NorthenCyprusIcon;
