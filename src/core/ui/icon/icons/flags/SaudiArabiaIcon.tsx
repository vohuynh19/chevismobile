import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SaudiArabiaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#6DA544"
      />
      <G fill="#F0F0F0">
        <Path d="M13.566 28.696a3.13 3.13 0 0 0 3.13 3.13h9.392a2.609 2.609 0 0 0 2.608 2.609h3.13a2.609 2.609 0 0 0 2.61-2.609v-3.13h-20.87ZM34.696 13.566v7.304a2.09 2.09 0 0 1-2.087 2.087v3.13a5.223 5.223 0 0 0 5.217-5.217v-7.304h-3.13ZM12.261 20.87a2.09 2.09 0 0 1-2.087 2.087v3.13a5.223 5.223 0 0 0 5.218-5.217v-7.304h-3.13v7.304Z" />
        <Path d="M33.13 13.566H30v7.304h3.13v-7.304ZM25.305 17.739a.522.522 0 0 1-1.043 0v-4.174h-3.13v4.174a.522.522 0 0 1-1.044 0v-4.174h-3.13v4.174a3.656 3.656 0 0 0 3.652 3.652 3.63 3.63 0 0 0 2.087-.657 3.63 3.63 0 0 0 2.547.627 2.089 2.089 0 0 1-2.026 1.595v3.13a5.223 5.223 0 0 0 5.218-5.217v-7.304h-3.13v4.174Z" />
        <Path d="M21.653 22.956h-4.696v3.13h4.696v-3.13Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SaudiArabiaIcon;
