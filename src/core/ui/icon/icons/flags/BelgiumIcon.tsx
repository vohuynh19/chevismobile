import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BelgiumIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M32.348 1.493A23.948 23.948 0 0 0 24 0c-2.936 0-5.748.528-8.348 1.493L13.565 24l2.087 22.507C18.252 47.472 21.064 48 24 48c2.936 0 5.748-.528 8.348-1.493L34.435 24 32.348 1.493Z"
        fill="#FFDA44"
      />
      <Path
        d="M48 24c0-10.32-6.513-19.116-15.652-22.507v45.014C41.487 43.117 48 34.32 48 24Z"
        fill="#D80027"
      />
      <Path
        d="M0 24c0 10.32 6.513 19.116 15.652 22.507V1.493C6.513 4.883 0 13.68 0 24Z"
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

export default BelgiumIcon;
