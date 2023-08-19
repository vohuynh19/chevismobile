import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MadeiraIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M34.434 2.381A23.904 23.904 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619A23.905 23.905 0 0 0 24 48c3.74 0 7.279-.856 10.434-2.381L36.521 24 34.434 2.381Z"
        fill="#FFDA44"
      />
      <G fill="#0052B4">
        <Path d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382ZM34.434 2.382v43.236C42.462 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618Z" />
      </G>
      <Path
        d="m30.783 26.087 1.565 2.087v-8.348l-1.565 2.087h-4.696v-4.696l2.087-1.565h-8.348l2.087 1.565v4.696h-4.696l-1.565-2.087v8.348l1.565-2.087h4.696v4.696l-2.087 1.565h8.348l-2.087-1.565v-4.696h4.696Z"
        fill="#D80027"
      />
      <Path
        d="M30.261 22.956h-5.217V17.74h-2.087v5.217h-5.218v2.087h5.218v5.218h2.087v-5.218h5.217v-2.087Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MadeiraIcon;
