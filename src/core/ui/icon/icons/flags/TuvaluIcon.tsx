import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const TuvaluIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24C0 24.006 24 .003 24 0c13.255 0 24 10.745 24 24Z"
        fill="#338AF3"
      />
      <G fill="#0052B4">
        <Path d="M11.48 24h8.094l-7.051-8.348-1.043 3.13V24ZM24 19.573l-8.348-8.095H24v8.095Z" />
      </G>
      <G fill="#F0F0F0">
        <Path d="M23.935 24h.064v-.064l-.064.064Z" />
        <Path d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z" />
      </G>
      <G fill="#D80027">
        <Path d="M12.142 3.13a24.114 24.114 0 0 0-9.011 9.012V24h6.26V9.391h14.61v-6.26H12.141Z" />
        <Path d="m24 21.049-8.527-8.527H12.52L24 24v-2.951Z" />
      </G>
      <G fill="#FFDA44">
        <Path d="m26.194 39.652.518 1.594h1.677l-1.356.986.518 1.594-1.357-.985-1.356.985.518-1.594L24 41.246h1.676l.518-1.594ZM39.546 29.217l.518 1.595h1.676l-1.356.985.519 1.594-1.357-.985-1.356.985.518-1.594-1.356-.985h1.676l.518-1.595ZM42.891 13.565l.518 1.595h1.676l-1.356.985.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.986h1.676l.518-1.594ZM43.719 25.044l.518 1.594h1.676l-1.356.985.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.985H43.2l.518-1.595ZM28.597 35.902l1.494.761 1.185-1.185-.262 1.656 1.493.76-1.655.263-.263 1.656-.76-1.494-1.656.262 1.185-1.185-.761-1.494ZM28.597 29.642l1.494.76 1.185-1.185-.262 1.656 1.493.76-1.655.263-.263 1.656-.76-1.494-1.656.263 1.185-1.186-.761-1.494ZM33.814 33.655l1.494.76 1.185-1.184-.262 1.655 1.493.761-1.655.262-.263 1.656-.76-1.494-1.656.263 1.185-1.186-.761-1.493ZM33.814 20.25l1.494.761 1.185-1.185-.262 1.656 1.493.76-1.655.263-.263 1.656-.76-1.494-1.656.262 1.185-1.185-.761-1.494ZM38.873 20.09l1.494.76 1.186-1.185-.263 1.656 1.494.76-1.656.263L40.866 24l-.76-1.494-1.657.263 1.186-1.186-.761-1.493Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TuvaluIcon;
