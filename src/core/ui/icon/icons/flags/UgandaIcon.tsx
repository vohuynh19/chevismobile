import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const UgandaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M41.887 40A23.908 23.908 0 0 0 48 24a23.908 23.908 0 0 0-6.113-16L24 6.26 6.113 8A23.909 23.909 0 0 0 0 24a23.908 23.908 0 0 0 6.113 16L24 41.74 41.887 40Z"
        fill="#FFDA44"
      />
      <Path
        d="M6.114 8h35.774C37.493 3.09 31.108 0 24 0 16.893 0 10.509 3.09 6.114 8Z"
        fill="#000"
      />
      <Path
        d="m0 24 24 2.087L48 24c0-2.805-.483-5.498-1.368-8H1.368A23.955 23.955 0 0 0 0 24Z"
        fill="#D80027"
      />
      <Path
        d="M1.368 32h45.265A23.96 23.96 0 0 0 48 24H0c0 2.805.483 5.498 1.368 8Z"
        fill="#000"
      />
      <Path
        d="M41.887 40H6.113c4.395 4.91 10.78 8 17.887 8 7.108 0 13.492-3.09 17.887-8Z"
        fill="#D80027"
      />
      <Path
        d="M32.008 24A8.008 8.008 0 0 1 24 32.009 8.008 8.008 0 0 1 15.99 24 8.008 8.008 0 0 1 24 15.991 8.008 8.008 0 0 1 32.008 24Z"
        fill="#F0F0F0"
      />
      <Path
        d="M26.934 24.408 24 23.137s.686-2.278.723-2.434a1.56 1.56 0 0 0-.418-1.461l.738-.739a2.6 2.6 0 0 0-1.844-.764 2.6 2.6 0 0 0-1.845.764l.738.738a1.56 1.56 0 0 0-.391 1.561l-1.11 1.111h2.018s-.835 1.254-1.29 2.284c-.456 1.03.006 2.286 1.06 2.754l.608.27 1.013.953v1.043l-1.043 1.044h2.087v-2.087l.952-.952h1.97l.028-.06a2.087 2.087 0 0 0-1.06-2.754Z"
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

export default UgandaIcon;
