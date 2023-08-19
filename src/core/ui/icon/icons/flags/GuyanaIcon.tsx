import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const GuyanaIcon = ({
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
      <Path
        d="M24 0a23.888 23.888 0 0 0-11.688 3.035v41.93A23.888 23.888 0 0 0 24 48c13.255 0 24-10.745 24-24S37.254 0 24 0Z"
        fill="#6DA544"
      />
      <Path
        d="M12.384 2.995A24.049 24.049 0 0 0 8.57 5.62L26.951 24 8.571 42.381a24.234 24.234 0 0 1 3.813 2.624L48 24 12.384 2.995Z"
        fill="#F0F0F0"
      />
      <Path
        d="M10.356 4.255A24.15 24.15 0 0 0 8.251 5.89L24 24 8.25 42.11a24.14 24.14 0 0 0 2.105 1.635L43.891 24 10.356 4.255Z"
        fill="#FFDA44"
      />
      <Path
        d="M8.57 5.619a24.17 24.17 0 0 0-1.541 1.41L21.913 24 7.029 40.97c.492.493 1.007.963 1.54 1.411L26.952 24 8.57 5.619Z"
        fill="#000"
      />
      <Path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GuyanaIcon;
