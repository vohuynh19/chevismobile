import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const GermanyIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M1.493 32.348C4.883 41.487 13.68 48 24 48c10.32 0 19.116-6.513 22.507-15.652L24 30.26 1.493 32.348Z"
        fill="#FFDA44"
      />
      <Path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652L24 17.74l22.507-2.087C43.117 6.513 34.32 0 24 0Z"
        fill="#000"
      />
      <Path
        d="M1.493 15.652A23.949 23.949 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348h45.014A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348H1.493Z"
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

export default GermanyIcon;
