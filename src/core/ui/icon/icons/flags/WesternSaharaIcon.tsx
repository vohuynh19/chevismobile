import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const WesternSaharaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M2.381 13.565A23.905 23.905 0 0 0 0 24c0 3.74.856 7.28 2.381 10.435L24 36.522l21.619-2.087A23.905 23.905 0 0 0 48 24c0-3.74-.856-7.28-2.381-10.435L24 11.478 2.381 13.565Z"
        fill="#F0F0F0"
      />
      <Path
        d="M2.383 34.435C6.265 42.463 14.486 48 24.001 48c9.515 0 17.736-5.537 21.617-13.565H2.383Z"
        fill="#496E2D"
      />
      <Path
        d="M2.383 13.565h43.235C41.737 5.537 33.516 0 24.001 0S6.265 5.537 2.383 13.565Z"
        fill="#000"
      />
      <G fill="#D80027">
        <Path d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03ZM30.261 24a7.305 7.305 0 0 1 5.74-7.134 7.304 7.304 0 1 0 0 14.269A7.306 7.306 0 0 1 30.26 24Z" />
        <Path d="m36.307 19.304 1.036 3.19h3.353l-2.713 1.97 1.037 3.188-2.713-1.97-2.712 1.97 1.036-3.188-2.713-1.97h3.353l1.036-3.19Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WesternSaharaIcon;
