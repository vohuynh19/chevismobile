import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const JerseyIcon = ({
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
        d="M43.04 38.613 28.427 24 43.04 9.387a24.257 24.257 0 0 0-4.427-4.427L24 19.573 9.386 4.96A24.229 24.229 0 0 0 4.96 9.387L19.573 24 4.959 38.613a24.259 24.259 0 0 0 4.427 4.428L24 28.427 38.613 43.04a24.244 24.244 0 0 0 4.427-4.427Z"
        fill="#D80027"
      />
      <Path
        d="M19.826 7.304 24 8.348l4.174-1.044V3.757l-1.67.834-2.505-2.504-2.504 2.504-1.67-.834v3.547Z"
        fill="#FFDA44"
      />
      <Path
        d="M19.826 7.304v2.61c0 3.194 4.174 4.173 4.174 4.173s4.174-.979 4.174-4.174V7.304h-8.348Z"
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

export default JerseyIcon;
