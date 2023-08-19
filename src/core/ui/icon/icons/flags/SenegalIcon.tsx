import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SenegalIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M34.434 2.381A23.905 23.905 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619A23.906 23.906 0 0 0 24 48c3.74 0 7.279-.856 10.434-2.381L36.521 24 34.434 2.381Z"
        fill="#FFDA44"
      />
      <G fill="#496E2D">
        <Path d="m24 15.652 2.073 6.377h6.705l-5.424 3.942 2.072 6.377L24 28.407l-5.425 3.94 2.072-6.376-5.425-3.942h6.706L24 15.652ZM13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382Z" />
      </G>
      <Path
        d="M34.434 2.382v43.236C42.462 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z"
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

export default SenegalIcon;
