import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const LibyaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M2.381 13.565A23.905 23.905 0 0 0 0 24c0 3.74.856 7.28 2.381 10.435L24 36.522l21.619-2.087A23.905 23.905 0 0 0 48 24c0-3.74-.856-7.28-2.381-10.435L24 11.478 2.381 13.565Z"
        fill="#000"
      />
      <Path
        d="M2.383 34.435C6.265 42.463 14.486 48 24.001 48c9.515 0 17.736-5.537 21.617-13.565H2.383Z"
        fill="#496E2D"
      />
      <Path
        d="M2.383 13.565h43.235C41.737 5.537 33.516 0 24.001 0S6.265 5.537 2.383 13.565Z"
        fill="#D80027"
      />
      <G fill="#F0F0F0">
        <Path d="m29.586 19.611 1.97 2.714 3.189-1.034-1.973 2.711 1.97 2.713-3.189-1.038-1.972 2.712.002-3.353-3.188-1.038 3.19-1.034.001-3.353Z" />
        <Path d="M24.211 30.783a6.783 6.783 0 1 1 3.227-12.75 8.348 8.348 0 1 0 0 11.935 6.75 6.75 0 0 1-3.227.815Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LibyaIcon;
