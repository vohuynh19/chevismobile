import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const TurkeyIcon = ({
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
      <G fill="#F0F0F0">
        <Path d="m23.019 19.611 1.969 2.714 3.189-1.034-1.972 2.711 1.969 2.713-3.188-1.038-1.973 2.712.002-3.353-3.188-1.038 3.19-1.034.002-3.353Z" />
        <Path d="M17.644 30.783a6.783 6.783 0 1 1 3.226-12.75 8.348 8.348 0 1 0 0 11.935 6.75 6.75 0 0 1-3.226.815Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TurkeyIcon;
