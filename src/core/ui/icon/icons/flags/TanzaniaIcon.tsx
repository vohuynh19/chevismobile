import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const TanzaniaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <Path
        d="M7.029 40.97a24.15 24.15 0 0 0 3.208 2.696l33.428-33.429a24.124 24.124 0 0 0-5.902-5.903L4.334 37.763a24.16 24.16 0 0 0 2.695 3.208Z"
        fill="#000"
      />
      <Path
        d="M7.028 7.03C-.544 14.6-1.997 25.971 2.664 35.003L35.003 2.666C25.97-1.996 14.598-.542 7.027 7.029Z"
        fill="#6DA544"
      />
      <Path
        d="M40.971 40.97c7.572-7.57 9.025-18.942 4.364-27.974L12.997 45.334c9.032 4.662 20.403 3.208 27.974-4.363Z"
        fill="#338AF3"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TanzaniaIcon;
