import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const HawaiiIcon = ({
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
        d="M24 48a23.907 23.907 0 0 0 15.872-6H8.127c4.23 3.733 9.787 6 15.873 6Z"
        fill="#D80027"
      />
      <G fill="#0052B4">
        <Path d="M.756 30a23.855 23.855 0 0 0 2.455 6h41.577a23.85 23.85 0 0 0 2.455-6L24 28.174.756 30ZM47.243 18a23.858 23.858 0 0 0-2.455-6L24 11.478V0c-1.783 0-3.52.195-5.193.563C18.775.57 3.13 12.911 3.13 24c.4.07 20.87 2.087 20.87 2.087V18h23.243Z" />
      </G>
      <Path
        d="M24 14.974v-12h-7.6l2.408-2.41C8.918 2.747 1.32 11.027.157 21.262A24.24 24.24 0 0 0 0 24h12.157v-4.783L16.987 24h8.586L16.4 14.974H24Z"
        fill="#F0F0F0"
      />
      <Path
        d="m24.011 24-9.026-9.026h-2.828L21.183 24H9.13V12H44.79a24.107 24.107 0 0 0-4.916-6H9.13v-.837a24.114 24.114 0 0 0-6 6.983V24H0c0 2.072.263 4.082.756 6h46.488c.493-1.918.756-3.928.756-6H24.011Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HawaiiIcon;
