import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SurinameIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <Path
        d="M46.507 15.652H1.493A23.951 23.951 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348h45.014A23.946 23.946 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348Z"
        fill="#A2001D"
      />
      <G fill="#6DA544">
        <Path d="M24.069 48c8.22 0 15.474-4.134 19.8-10.435h-39.6C8.594 43.866 15.849 48 24.069 48ZM24.069 0c8.22 0 15.474 4.134 19.8 10.435h-39.6C8.594 4.134 15.849 0 24.069 0Z" />
      </G>
      <Path
        d="m24 15.652 2.071 6.377h6.706l-5.425 3.942 2.072 6.377-5.425-3.941-5.425 3.94 2.072-6.376-5.424-3.942h6.705L24 15.652Z"
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

export default SurinameIcon;
