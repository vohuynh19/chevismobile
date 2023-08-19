import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BritishVirginIslandsIcon = ({
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
      <Path
        d="M12.142 3.13a24.114 24.114 0 0 0-9.012 9.012V24h6.261V9.392H24V3.13H12.142Z"
        fill="#D80027"
      />
      <Path
        d="m34.435 24-6.487 6.487a7.302 7.302 0 0 0 12.974 0L34.435 24Z"
        fill="#FFDA44"
      />
      <Path d="m24 21.049-8.527-8.527h-2.951L24 24v-2.951Z" fill="#D80027" />
      <Path
        d="M27.13 12.522V24c0 5.591 7.305 7.304 7.305 7.304s7.304-1.713 7.304-7.304V12.522H27.13Z"
        fill="#6DA544"
      />
      <Path d="M36 17.739h-3.13v8.348H36v-8.348Z" fill="#F0F0F0" />
      <Path
        d="M34.435 19.304a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z"
        fill="#A2001D"
      />
      <G fill="#FFDA44">
        <Path d="M31.304 14.609h-2.087v2.087h2.087v-2.087ZM31.304 19.304h-2.087v2.087h2.087v-2.087ZM31.304 24h-2.087v2.087h2.087V24ZM39.652 14.609h-2.087v2.087h2.087v-2.087ZM39.652 19.304h-2.087v2.087h2.087v-2.087ZM39.652 24h-2.087v2.087h2.087V24Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BritishVirginIslandsIcon;
