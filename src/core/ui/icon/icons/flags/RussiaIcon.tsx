import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const RussiaIcon = ({
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
        d="M46.507 32.348A23.946 23.946 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348H1.493A23.949 23.949 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087Z"
        fill="#0052B4"
      />
      <Path
        d="M24 48c10.318 0 19.115-6.513 22.507-15.652H1.492C4.883 41.487 13.68 48 23.999 48Z"
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

export default RussiaIcon;
