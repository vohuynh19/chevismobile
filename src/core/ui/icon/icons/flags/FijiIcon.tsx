import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const FijiIcon = ({
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
        <Path d="M24 11.478v8.095l-8.348-8.095H24ZM12.522 24h7.051l-7.05-9.391-1.044 7.304L12.522 24Z" />
      </G>
      <G fill="#F0F0F0">
        <Path d="M23.935 24H24v-.064l-.065.064Z" />
        <Path d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z" />
      </G>
      <G fill="#D80027">
        <Path d="M12.142 3.13a24.114 24.114 0 0 0-9.011 9.012V24h6.26V9.392h14.61V3.13H12.141Z" />
        <Path d="m24 21.049-8.526-8.527h-2.952L24 24v-2.951Z" />
      </G>
      <Path
        d="M27.13 15.652V24c0 5.591 7.305 7.304 7.305 7.304S41.74 29.591 41.74 24v-8.348l-7.304-2.087-7.304 2.087Z"
        fill="#F3F3F3"
      />
      <Path
        d="M41.74 15.652v-3.13H27.13v3.13h6.262v6.261H27.13V24h6.26v6.984c.63.223 1.044.32 1.044.32s.414-.097 1.043-.32V24h6.261v-2.087h-6.26v-6.26h6.26Z"
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

export default FijiIcon;
