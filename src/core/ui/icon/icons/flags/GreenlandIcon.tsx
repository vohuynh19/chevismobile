import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const GreenlandIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24c-1.043 0-24 3.13-24 3.13L0 24Z"
        fill="#F0F0F0"
      />
      <Path d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24" fill="#D80027" />
      <Path
        d="M16.695 35.478c6.34 0 11.479-5.139 11.479-11.478 0-6.34-5.14-11.478-11.479-11.478-6.339 0-11.478 5.139-11.478 11.478 0 6.34 5.139 11.478 11.478 11.478Z"
        fill="#F0F0F0"
      />
      <Path
        d="M5.217 24c0-6.339 5.139-11.478 11.478-11.478 6.34 0 11.479 5.139 11.479 11.478"
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

export default GreenlandIcon;
