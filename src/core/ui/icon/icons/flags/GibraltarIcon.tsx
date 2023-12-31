import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const GibraltarIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F9F9F9"
      />
      <G fill="#D80027">
        <Path d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48ZM33.392 19.826v-3.13h1.043v-2.087h-2.087v1.043h-2.087V14.61h-2.087v2.087h1.044v3.13H27.13v-7.304h1.043v-2.087h-2.087v1.043h-1.043v-1.043h-2.087v1.043h-1.044v-1.043h-2.086v2.087h1.043v7.304h-2.087v-3.13h1.044v-2.087H17.74v1.043h-2.087V14.61h-2.087v2.087h1.043v3.13h-2.087v8.348H35.48v-8.348h-2.087Z" />
      </G>
      <Path
        d="M24 27.13a3.13 3.13 0 0 0-1.043 6.082v4.353h-3.13v4.174h5.217v-8.526A3.131 3.131 0 0 0 24 27.13Zm0 4.174a1.044 1.044 0 1 1 0-2.087 1.044 1.044 0 0 1 0 2.087Z"
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

export default GibraltarIcon;
