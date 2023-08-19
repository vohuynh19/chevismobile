import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const QatarIcon = ({
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
        d="M48 24C48 10.745 37.255 0 24 0c-4.695 0-9.074 1.35-12.774 3.68l5.261 2.235L9.391 8.93l7.096 3.014-7.096 3.015 7.096 3.015-7.096 3.014 7.096 3.014-7.096 3.014 7.096 3.015-7.096 3.014 7.096 3.014-7.096 3.015 7.096 3.014-5.258 2.234A23.888 23.888 0 0 0 24 48c13.255 0 24-10.745 24-24Z"
        fill="#751A46"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default QatarIcon;
