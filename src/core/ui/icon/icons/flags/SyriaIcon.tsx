import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SyriaIcon = ({
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
        d="M24 0C13.68 0 4.882 6.513 1.491 15.652h45.015C43.114 6.513 34.318 0 23.999 0Z"
        fill="#D80027"
      />
      <Path
        d="M24 48c10.318 0 19.115-6.513 22.506-15.652H1.492C4.883 41.487 13.68 48 23.999 48Z"
        fill="#000"
      />
      <G fill="#6DA544">
        <Path d="m14.34 18.261 1.296 3.986h4.19l-3.39 2.463 1.295 3.986-3.39-2.464-3.39 2.464 1.294-3.986-3.39-2.463h4.19l1.296-3.986ZM33.66 18.261l1.295 3.986h4.191l-3.39 2.463 1.295 3.986-3.39-2.464-3.391 2.464 1.295-3.986-3.39-2.463h4.19l1.295-3.986Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SyriaIcon;
