import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const ScotlandIcon = ({
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
      <G fill="#0052B4">
        <Path d="M38.61 4.961A23.892 23.892 0 0 0 24 0 23.893 23.893 0 0 0 9.387 4.961l14.612 14.612L38.61 4.96ZM4.961 9.388A23.893 23.893 0 0 0 0 24c0 5.499 1.85 10.565 4.961 14.612L19.573 24 4.96 9.388ZM9.387 43.039A23.892 23.892 0 0 0 23.999 48c5.498 0 10.564-1.85 14.611-4.961L24 28.427 9.387 43.04ZM43.04 38.611A23.892 23.892 0 0 0 48.001 24c0-5.499-1.85-10.565-4.961-14.612L28.429 24 43.04 38.61Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ScotlandIcon;
