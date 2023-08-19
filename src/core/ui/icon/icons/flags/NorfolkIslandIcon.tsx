import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const NorfolkIslandIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M34.434 2.381A23.904 23.904 0 0 0 24 0c-3.74 0-7.28.856-10.435 2.381L11.478 24l2.087 21.619A23.905 23.905 0 0 0 24 48c3.74 0 7.279-.856 10.434-2.381L36.521 24 34.434 2.381Z"
        fill="#F0F0F0"
      />
      <G fill="#6DA544">
        <Path d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382ZM34.434 2.382v43.236C42.462 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618ZM30.261 31.304l-6.26-19.826-6.262 19.826h4.696v5.218h3.13v-5.218h4.696Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NorfolkIslandIcon;
