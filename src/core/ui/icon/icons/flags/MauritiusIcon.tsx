import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MauritiusIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M2.918 12.522 24 14.609l21.082-2.087C41.012 5.062 33.097 0 24 0 14.903 0 6.99 5.061 2.918 12.522Z"
        fill="#D80027"
      />
      <Path
        d="M2.918 35.478 24 37.565l21.082-2.087A23.893 23.893 0 0 0 48 24l-24-2.087L0 24c0 4.158 1.058 8.068 2.918 11.478Z"
        fill="#FFDA44"
      />
      <Path
        d="M2.918 12.522A23.893 23.893 0 0 0 0 24h48c0-4.158-1.058-8.069-2.918-11.478H2.918Z"
        fill="#0052B4"
      />
      <Path
        d="M24 48c9.097 0 17.011-5.062 21.082-12.522H2.918C6.988 42.938 14.903 48 24 48Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MauritiusIcon;
