import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SpainIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 13.565 1.493 15.652A23.948 23.948 0 0 0 0 24Z"
        fill="#FFDA44"
      />
      <G fill="#D80027">
        <Path d="M46.507 15.652C43.114 6.513 34.318 0 23.999 0 13.68 0 4.883 6.513 1.492 15.652h45.015ZM1.492 32.348C4.883 41.487 13.68 48 24 48c10.32 0 19.116-6.513 22.508-15.652H1.492Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SpainIcon;
