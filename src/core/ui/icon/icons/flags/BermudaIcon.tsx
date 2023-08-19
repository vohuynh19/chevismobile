import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BermudaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24C0 24.006 24 .003 24 0c13.255 0 24 10.745 24 24Z"
        fill="#D80027"
      />
      <G fill="#0052B4">
        <Path d="M24 11.478v8.095l-8.348-8.095H24ZM12.522 24h7.05l-7.05-9.391-1.044 7.304L12.522 24Z" />
      </G>
      <G fill="#F0F0F0">
        <Path d="M23.936 24H24v-.064l-.064.064Z" />
        <Path d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z" />
      </G>
      <G fill="#D80027">
        <Path d="M12.142 3.13a24.114 24.114 0 0 0-9.012 9.012v12.901h6.261V9.392h15.652V3.13H12.142Z" />
        <Path d="m24.954 22.003-9.481-9.481H12.52l12.433 12.432v-2.951Z" />
      </G>
      <Path
        d="M27.13 12.522V24c0 5.591 14.609 5.591 14.609 0V12.522H27.13Z"
        fill="#F3F3F3"
      />
      <Path
        d="M27.13 24c0 5.591 7.305 7.304 7.305 7.304s7.304-1.713 7.304-7.304H27.13Z"
        fill="#6DA544"
      />
      <Path
        d="m34.435 19.409-3.391 1.46V24l3.39 2.087L37.827 24v-3.13l-3.391-1.461Z"
        fill="#A2001D"
      />
      <Path d="M37.826 17.739h-6.782v3.13h6.782v-3.13Z" fill="#338AF3" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BermudaIcon;
