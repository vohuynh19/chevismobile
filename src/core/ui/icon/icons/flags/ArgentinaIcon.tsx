import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const ArgentinaIcon = ({
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
      <G fill="#338AF3">
        <Path d="M24 0C14.485 0 6.263 5.537 2.381 13.565h43.237C41.737 5.537 33.515 0 24 0ZM24 48c9.515 0 17.737-5.537 21.619-13.565H2.38C6.263 42.463 14.485 48 24 48Z" />
      </G>
      <Path
        d="m31.173 24-2.93 1.379 1.56 2.838-3.183-.608-.403 3.215L24 28.459l-2.217 2.365-.403-3.216-3.183.61 1.56-2.84L16.828 24l2.93-1.379-1.56-2.838 3.183.608.403-3.215L24 19.541l2.217-2.365.403 3.216 3.183-.61-1.56 2.84L31.172 24Z"
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

export default ArgentinaIcon;
