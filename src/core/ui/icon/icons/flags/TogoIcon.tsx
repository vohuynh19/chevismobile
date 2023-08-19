import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const TogoIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <G fill="#496E2D">
        <Path d="M23.999 0c-.017 0-1.043 9.6-1.043 9.6H43.2C38.821 3.77 31.85 0 24 0ZM24 48c7.851 0 14.822-3.77 19.2-9.6H4.8c4.378 5.83 11.349 9.6 19.2 9.6ZM47.518 19.2H22.956l1.043 9.6h23.52c.314-1.551.48-3.156.48-4.8 0-1.644-.166-3.25-.48-4.8Z" />
      </G>
      <Path
        d="M24 28.8V0C10.745 0 0 10.745 0 24c0 1.644.166 3.25.48 4.8H24Z"
        fill="#D80027"
      />
      <Path
        d="m13.243 11.478 1.554 4.783h5.029l-4.069 2.956L17.311 24l-4.068-2.956L9.174 24l1.554-4.783-4.068-2.956h5.029l1.554-4.783Z"
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

export default TogoIcon;
