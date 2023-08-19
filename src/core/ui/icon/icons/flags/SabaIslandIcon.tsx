import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SabaIslandIcon = ({
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
      <G fill="#D80027">
        <Path d="M24 0C23.978-.017-.006 23.994 0 24 0 10.745 10.745 0 24 0ZM24 0c.022-.017 24.006 23.994 24 24C48 10.745 37.255 0 24 0Z" />
      </G>
      <G fill="#0052B4">
        <Path d="M24 48c-.022.017-24.006-23.994-24-24 0 13.255 10.745 24 24 24ZM24 48c.022.017 24.006-23.994 24-24 0 13.255-10.745 24-24 24Z" />
      </G>
      <Path
        d="m24 12.522 2.59 7.971h8.381l-6.78 4.927 2.59 7.971-6.782-4.926-6.78 4.926 2.59-7.971-6.781-4.927h8.381L24 12.522Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SabaIslandIcon;
