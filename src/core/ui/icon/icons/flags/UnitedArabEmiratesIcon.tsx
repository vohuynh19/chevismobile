import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const UnitedArabEmiratesIcon = ({
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
        d="m13.566 32.348 2.087 14.16C18.253 47.471 21.065 48 24 48c10.319 0 19.116-6.513 22.507-15.652H13.566Z"
        fill="#000"
      />
      <Path
        d="m13.566 15.652 2.087-14.16A23.946 23.946 0 0 1 24 0C34.32 0 43.117 6.513 46.508 15.652H13.566Z"
        fill="#6DA544"
      />
      <Path
        d="M0 24c0 10.32 6.513 19.116 15.652 22.507V1.493C6.513 4.883 0 13.68 0 24Z"
        fill="#A2001D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UnitedArabEmiratesIcon;
