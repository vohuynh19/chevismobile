import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const EstoniaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.947 23.947 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.95 23.95 0 0 0 0 24Z"
        fill="#000"
      />
      <Path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#0052B4"
      />
      <Path
        d="M46.507 32.348H1.493C4.883 41.487 13.68 48 24 48c10.32 0 19.116-6.513 22.507-15.652Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EstoniaIcon;
