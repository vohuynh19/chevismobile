import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BeninIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m15.652 21.913 2.087 25.26c1.996.538 4.095.827 6.261.827 13.255 0 24-10.745 24-24l-32.348-2.087Z"
        fill="#D80027"
      />
      <Path
        d="M15.652 24 17.74.827A24.026 24.026 0 0 1 24 0c13.255 0 24 10.745 24 24H15.652Z"
        fill="#FFDA44"
      />
      <Path
        d="M0 24c0 11.089 7.52 20.42 17.74 23.173V.827C7.52 3.58 0 12.91 0 24Z"
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

export default BeninIcon;
