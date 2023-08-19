import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BahrainIcon = ({
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
        d="M24 0c-4.817 0-9.3 1.42-13.06 3.862L17.114 8l-7.722 4 7.722 4-7.722 4 7.722 4-7.722 4 7.722 4-7.722 4 7.722 4-6.173 4.138A23.885 23.885 0 0 0 24 48c13.255 0 24-10.745 24-24S37.255 0 24 0Z"
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

export default BahrainIcon;
