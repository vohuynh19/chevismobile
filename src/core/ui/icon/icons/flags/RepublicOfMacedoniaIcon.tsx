import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const RepublicOfMacedoniaIcon = ({
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
      <G fill="#D80027">
        <Path d="M27.65 47.724a23.871 23.871 0 0 0 10.543-4.37L24 24l3.65 23.724ZM20.349.276a23.874 23.874 0 0 0-10.543 4.37L23.999 24 20.349.276ZM9.806 43.354a23.875 23.875 0 0 0 10.543 4.37L23.999 24 9.806 43.354Z" />
        <Path d="M4.646 9.807A23.873 23.873 0 0 0 .276 20.35L24 24 4.646 9.807ZM.276 27.65a23.871 23.871 0 0 0 4.37 10.543L24 24 .276 27.65ZM47.724 20.35a23.874 23.874 0 0 0-4.37-10.543L24 24l23.724-3.65ZM38.193 4.646A23.872 23.872 0 0 0 27.65.276L24 24 38.193 4.646ZM43.354 38.193a23.875 23.875 0 0 0 4.37-10.543L24 24l19.354 14.193Z" />
        <Path d="M24 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z" />
      </G>
      <Path
        d="M24 30.26a6.26 6.26 0 1 0 0-12.521 6.26 6.26 0 0 0 0 12.522Z"
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

export default RepublicOfMacedoniaIcon;
