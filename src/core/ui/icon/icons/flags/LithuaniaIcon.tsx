import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const LithuaniaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M46.507 32.348A23.945 23.945 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 13.565 1.493 15.652A23.946 23.946 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087Z"
        fill="#6DA544"
      />
      <Path
        d="M46.506 15.652C43.116 6.513 34.318 0 24 0S4.883 6.513 1.492 15.652h45.014Z"
        fill="#FFDA44"
      />
      <Path
        d="M24 48c10.318 0 19.115-6.513 22.506-15.652H1.492C4.883 41.487 13.68 48 23.999 48Z"
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

export default LithuaniaIcon;
