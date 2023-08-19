import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const JamaicaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <Path
        d="M38.612 4.961A23.892 23.892 0 0 0 24 0 23.893 23.893 0 0 0 9.39 4.961L24 19.573 38.612 4.96Z"
        fill="#6DA544"
      />
      <Path
        d="M4.961 9.388A23.893 23.893 0 0 0 0 24c0 5.499 1.85 10.565 4.961 14.612L19.573 24 4.96 9.388Z"
        fill="#000"
      />
      <Path
        d="M9.389 43.039A23.892 23.892 0 0 0 24 48c5.5 0 10.565-1.85 14.612-4.961L24 28.427 9.39 43.04Z"
        fill="#6DA544"
      />
      <Path
        d="M43.04 38.611A23.892 23.892 0 0 0 48 24c0-5.499-1.85-10.565-4.96-14.612L28.427 24 43.039 38.61Z"
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

export default JamaicaIcon;
