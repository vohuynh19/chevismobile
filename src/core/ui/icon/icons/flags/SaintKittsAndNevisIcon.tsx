import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SaintKittsAndNevisIcon = ({
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
      <Path
        d="M7.03 40.97a24.136 24.136 0 0 0 3.207 2.696l33.428-33.428a24.157 24.157 0 0 0-5.903-5.903L4.334 37.763c.79 1.127 1.688 2.2 2.695 3.208Z"
        fill="#000"
      />
      <Path
        d="M7.03 7.03C-.542 14.6-1.995 25.971 2.666 35.003L35.005 2.666C25.973-1.995 14.6-.542 7.03 7.03Z"
        fill="#6DA544"
      />
      <Path
        d="M40.97 40.97c7.572-7.57 9.025-18.942 4.364-27.974L12.995 45.334c9.033 4.662 20.404 3.208 27.975-4.363Z"
        fill="#D80027"
      />
      <G fill="#F0F0F0">
        <Path d="m15.26 28.313 2.24 1.142 1.778-1.778-.393 2.483 2.24 1.142-2.484.393-.393 2.484-1.142-2.24-2.483.393 1.778-1.778-1.142-2.24ZM28.313 15.26l2.24 1.141 1.778-1.778-.393 2.484 2.24 1.142-2.483.393-.394 2.483-1.141-2.24-2.484.393 1.778-1.778-1.141-2.24Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SaintKittsAndNevisIcon;
