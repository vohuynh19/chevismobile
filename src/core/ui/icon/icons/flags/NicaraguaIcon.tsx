import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const NicaraguaIcon = ({
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
        <Path d="M24 0C14.485 0 6.263 5.537 2.38 13.565h43.237C41.736 5.537 33.515 0 24 0ZM24 48c9.515 0 17.736-5.537 21.618-13.565H2.381C6.263 42.463 14.485 48 24 48Z" />
      </G>
      <Path
        d="M24 16.696a7.304 7.304 0 1 0 0 14.608 7.304 7.304 0 0 0 0-14.608Zm0 11.478a4.174 4.174 0 1 1 0-8.348 4.174 4.174 0 0 1 0 8.348Z"
        fill="#FFDA44"
      />
      <Path
        d="M27.615 25.043 24 24l-3.615 1.043-1.205 2.087h9.64l-1.205-2.087Z"
        fill="#0052B4"
      />
      <Path
        d="m24 18.783-2.41 4.173L24 24l2.41-1.044L24 18.783Z"
        fill="#338AF3"
      />
      <Path
        d="M20.386 25.043h7.23l-1.206-2.087h-4.82l-1.204 2.087Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NicaraguaIcon;
