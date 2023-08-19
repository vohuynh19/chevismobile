import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const AfghanistanIcon = ({
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
        d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382Z"
        fill="#000"
      />
      <Path
        d="M34.435 2.382v43.236C42.463 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z"
        fill="#496E2D"
      />
      <G fill="#FFDA44">
        <Path d="M24 15.652a8.348 8.348 0 1 0 0 16.696 8.348 8.348 0 0 0 0-16.696Zm0 13.565a5.217 5.217 0 1 1 0-10.434 5.217 5.217 0 0 1 0 10.434Z" />
        <Path d="M24 20.87a2.087 2.087 0 0 0-2.087 2.086v3.131h4.174v-3.13A2.087 2.087 0 0 0 24 20.87Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AfghanistanIcon;
