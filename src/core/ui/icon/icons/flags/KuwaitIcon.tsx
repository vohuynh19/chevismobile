import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const KuwaitIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M46.507 32.348A23.948 23.948 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 13.565 1.493 15.652A23.948 23.948 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087Z"
        fill="#F0F0F0"
      />
      <Path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#D80027"
      />
      <Path
        d="M24 0C13.68 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#6DA544"
      />
      <Path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94l8.623-8.622V15.652L7.029 7.03Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default KuwaitIcon;
