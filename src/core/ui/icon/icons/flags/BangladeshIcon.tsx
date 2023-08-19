import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BangladeshIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#496E2D"
      />
      <Path
        d="M18.783 34.435c5.763 0 10.434-4.672 10.434-10.435 0-5.763-4.671-10.435-10.434-10.435-5.763 0-10.435 4.672-10.435 10.435 0 5.763 4.672 10.435 10.435 10.435Z"
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

export default BangladeshIcon;
