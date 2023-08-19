import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const StVincentAndTheGrenadinesIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M35.478 2.918A23.893 23.893 0 0 0 23.999 0a23.892 23.892 0 0 0-11.478 2.918L10.434 24l2.087 21.082A23.892 23.892 0 0 0 24 48c4.158 0 8.069-1.058 11.479-2.918L37.565 24 35.478 2.918Z"
        fill="#FFDA44"
      />
      <Path
        d="M12.522 45.082V2.918C5.062 6.988 0 14.903 0 24c0 9.097 5.061 17.011 12.522 21.082Z"
        fill="#338AF3"
      />
      <G fill="#6DA544">
        <Path d="M48.002 24c0-9.097-5.062-17.011-12.522-21.082v42.164C42.94 41.012 48.002 33.097 48.002 24ZM18.783 30.26 14.61 24l4.174-6.261 4.174 6.26-4.174 6.262ZM29.218 30.26 25.044 24l4.174-6.261 4.174 6.26-4.174 6.262ZM24.001 38.609l-4.174-6.261 4.174-6.261 4.174 6.26-4.174 6.262Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default StVincentAndTheGrenadinesIcon;
