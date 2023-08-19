import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MarshallIslandIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24 0-4.028-.994-7.823-2.747-11.156L23.972 24.028l11.184-21.28A23.893 23.893 0 0 0 24 0C10.745 0 0 10.745 0 24a23.925 23.925 0 0 0 7.03 16.97A23.925 23.925 0 0 0 24 48Z"
        fill="#0052B4"
      />
      <Path
        d="M45.228 12.87a23.993 23.993 0 0 0-4.285-5.812 23.99 23.99 0 0 0-5.813-4.285L7.002 40.999l38.226-28.13Z"
        fill="#F0F0F0"
      />
      <Path
        d="m7.002 40.999 38.226-28.13a23.993 23.993 0 0 0-4.285-5.811L7.002 40.997Z"
        fill="#FF9811"
      />
      <Path
        d="m20.841 14.074-2.93 1.379 1.56 2.838-3.183-.608-.403 3.215-2.217-2.365-2.217 2.365-.403-3.215-3.183.608 1.56-2.838-2.93-1.379 2.93-1.379-1.56-2.838 3.182.608.404-3.215 2.217 2.365 2.217-2.365.403 3.215 3.183-.608-1.56 2.838 2.93 1.379Z"
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

export default MarshallIslandIcon;
