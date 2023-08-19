import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const TaiwanIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24L24 0c13.255 0 24 10.745 24 24Z"
        fill="#D80027"
      />
      <Path d="M24 24V0C10.745 0 0 10.745 0 24h24Z" fill="#0052B4" />
      <Path
        d="m20.87 14.046-2.93 1.379 1.56 2.838-3.183-.609-.403 3.216-2.217-2.365-2.217 2.365-.403-3.216-3.183.61 1.56-2.84-2.93-1.378 2.93-1.379-1.56-2.839 3.183.61.403-3.216 2.217 2.365 2.217-2.365.403 3.215 3.183-.609-1.56 2.84 2.93 1.378Z"
        fill="#F0F0F0"
      />
      <Path
        d="M13.696 18.513a4.468 4.468 0 1 0 0-8.935 4.468 4.468 0 0 0 0 8.935Z"
        fill="#0052B4"
      />
      <Path
        d="M13.696 16.426a2.383 2.383 0 0 1-2.38-2.38 2.383 2.383 0 0 1 2.38-2.38 2.383 2.383 0 0 1 2.38 2.38 2.383 2.383 0 0 1-2.38 2.38Z"
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

export default TaiwanIcon;
