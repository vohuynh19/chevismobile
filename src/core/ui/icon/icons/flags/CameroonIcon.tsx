import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const CameroonIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M34.435 2.381A23.905 23.905 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619A23.906 23.906 0 0 0 24 48c3.74 0 7.28-.856 10.435-2.381L36.522 24 34.435 2.381Z"
        fill="#D80027"
      />
      <Path
        d="m24 15.652 2.072 6.377h6.705l-5.424 3.942 2.072 6.377L24 28.406l-5.425 3.942 2.072-6.377-5.424-3.942h6.705L24 15.652Z"
        fill="#FFDA44"
      />
      <Path
        d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382Z"
        fill="#496E2D"
      />
      <Path
        d="M34.435 2.382v43.236C42.463 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CameroonIcon;
