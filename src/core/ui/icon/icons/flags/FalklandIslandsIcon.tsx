import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const FalklandIslandsIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24C0 24.006 24 .003 24 0c13.255 0 24 10.745 24 24Z"
        fill="#0052B4"
      />
      <G fill="#F0F0F0">
        <Path d="M23.936 24H24v-.064l-.064.064Z" />
        <Path d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z" />
      </G>
      <G fill="#D80027">
        <Path d="M12.142 3.13a24.115 24.115 0 0 0-9.012 9.012V24h6.261V9.392H24V3.13H12.142Z" />
        <Path d="m24 21.049-8.527-8.527h-2.951L24 24v-2.951Z" />
      </G>
      <Path
        d="M38.609 28.174v1.043H30.26v-1.043h-3.13v4.174h2.086v1.043h10.435v-1.043h2.087v-4.174h-3.13Z"
        fill="#FFDA44"
      />
      <Path
        d="M27.13 12.522V24c0 5.591 7.305 7.304 7.305 7.304s7.304-1.713 7.304-7.304V12.522H27.13Z"
        fill="#338AF3"
      />
      <G fill="#F3F3F3">
        <Path d="M34.434 21.083c-1.826 0-1.826 1.67-3.652 1.67s-1.826-1.67-3.652-1.67v2.922c1.826 0 1.826 1.67 3.652 1.67s1.826-1.67 3.652-1.67 1.827 1.67 3.653 1.67 1.826-1.67 3.652-1.67v-2.922c-1.826 0-1.826 1.67-3.652 1.67-1.827 0-1.827-1.67-3.653-1.67ZM34.434 15.235c-1.826 0-1.826 1.67-3.652 1.67s-1.826-1.67-3.652-1.67v2.922c1.826 0 1.826 1.67 3.652 1.67s1.826-1.67 3.652-1.67 1.827 1.67 3.653 1.67 1.826-1.67 3.652-1.67v-2.922c-1.826 0-1.826 1.67-3.652 1.67-1.827 0-1.827-1.67-3.653-1.67Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FalklandIslandsIcon;
