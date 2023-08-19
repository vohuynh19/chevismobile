import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MontserratIcon = ({
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
        <Path d="M12.142 3.13a24.114 24.114 0 0 0-9.011 9.012V24h6.26V9.391h14.61v-6.26H12.141Z" />
        <Path d="m24 21.049-8.527-8.527h-2.95L24 24v-2.951Z" />
      </G>
      <Path
        d="M27.13 12.522V24c0 5.591 7.305 7.304 7.305 7.304S41.74 29.591 41.74 24V12.522H27.131Z"
        fill="#338AF3"
      />
      <Path
        d="M27.13 24c0 5.591 7.305 7.304 7.305 7.304S41.74 29.591 41.74 24H27.131Z"
        fill="#A2001D"
      />
      <Path
        d="M37.566 17.74H35.48v-2.088h-2.087v2.087h-2.087v2.087h2.087v6.261h2.087v-6.26h2.087v-2.088Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MontserratIcon;
