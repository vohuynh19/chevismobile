import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const OrkneyIslandsIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M47.173 30.26c.538-1.995.827-4.094.827-6.26 0-2.166-.289-4.265-.827-6.26L21.913.09A23.878 23.878 0 0 0 9.391 4.96L.827 17.739A24.026 24.026 0 0 0 0 24c0 2.154.285 4.24.817 6.226l8.574 12.815a23.878 23.878 0 0 0 12.522 4.868l25.26-17.648Z"
        fill="#FFDA44"
      />
      <G fill="#D80027">
        <Path d="M.827 30.261a24.02 24.02 0 0 0 8.565 12.78v-12.78H.827ZM21.914 47.909c.688.059 1.383.091 2.087.091 11.088 0 20.419-7.52 23.173-17.739h-25.26v17.648ZM47.174 17.74C44.42 7.52 35.089 0 24 0c-.704 0-1.4.032-2.087.091V17.74h25.26ZM9.392 4.959a24.021 24.021 0 0 0-8.565 12.78h8.565V4.959Z" />
      </G>
      <Path
        d="M47.797 20.87H18.783V.57a23.838 23.838 0 0 0-6.261 2.348V20.87H.203a24.238 24.238 0 0 0 0 6.261h12.319v17.952a23.838 23.838 0 0 0 6.26 2.347V27.131h29.015a24.224 24.224 0 0 0 0-6.261Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default OrkneyIslandsIcon;
