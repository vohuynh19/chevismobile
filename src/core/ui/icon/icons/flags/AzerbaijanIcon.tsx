import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const AzerbaijanIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.949 23.949 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.946 23.946 0 0 0 48 24Z"
        fill="#D80027"
      />
      <Path
        d="M24 48c10.319 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#6DA544"
      />
      <Path
        d="M1.493 15.652h45.014C43.117 6.513 34.32 0 24 0 13.68 0 4.884 6.513 1.493 15.652Z"
        fill="#338AF3"
      />
      <G fill="#F0F0F0">
        <Path d="M24.522 30.783a6.783 6.783 0 1 1 3.226-12.75 8.348 8.348 0 1 0 0 11.934c-.96.52-2.058.816-3.226.816Z" />
        <Path d="m29.739 19.304.898 2.527 2.422-1.151-1.151 2.421 2.527.899-2.527.898 1.151 2.422-2.422-1.151-.898 2.527-.898-2.527-2.422 1.151 1.151-2.422L25.043 24l2.527-.899-1.151-2.421 2.422 1.15.898-2.526Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AzerbaijanIcon;
