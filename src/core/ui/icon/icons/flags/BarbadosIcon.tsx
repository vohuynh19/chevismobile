import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BarbadosIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M34.435 2.381A23.905 23.905 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619A23.906 23.906 0 0 0 24 48c3.74 0 7.28-.856 10.435-2.381L36.522 24 34.435 2.381Z"
        fill="#FFDA44"
      />
      <G fill="#0052B4">
        <Path d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382ZM34.435 2.382v43.236C42.463 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z" />
      </G>
      <Path
        d="m31.304 14.609 1.4.7-1.4-.7-1.4-.7c-.084.169-1.912 3.888-2.21 9.57h-2.129v-8.87L24 12.522l-1.565 2.087v8.87h-2.128c-.299-5.682-2.127-9.401-2.211-9.57l-2.8 1.4c.019.038 1.921 3.91 1.921 9.735v1.565h5.218v8.87h3.13v-8.87h5.218v-1.566c0-3.01.52-5.493.958-7.046.476-1.693.96-2.682.965-2.692l-1.402-.696Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BarbadosIcon;
