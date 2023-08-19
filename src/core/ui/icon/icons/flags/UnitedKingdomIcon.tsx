import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const UnitedKingdomIcon = ({
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
      <G fill="#0052B4">
        <Path d="M4.962 9.388A23.912 23.912 0 0 0 .827 17.74h12.486L4.962 9.39ZM47.174 17.74a23.912 23.912 0 0 0-4.134-8.352l-8.351 8.351h12.485ZM.827 30.261a23.916 23.916 0 0 0 4.135 8.35l8.35-8.35H.828ZM38.612 4.961a23.914 23.914 0 0 0-8.35-4.134v12.485l8.35-8.35ZM9.39 43.039a23.915 23.915 0 0 0 8.35 4.134V34.688l-8.35 8.35ZM17.74.827A23.915 23.915 0 0 0 9.39 4.96l8.35 8.351V.827ZM30.26 47.173a23.915 23.915 0 0 0 8.351-4.134l-8.35-8.351v12.485ZM34.689 30.261l8.35 8.35a23.913 23.913 0 0 0 4.135-8.35H34.69Z" />
      </G>
      <G fill="#D80027">
        <Path d="M47.797 20.87H27.13V.203a24.24 24.24 0 0 0-6.261 0V20.87H.203a24.24 24.24 0 0 0 0 6.261H20.87v20.667a24.22 24.22 0 0 0 6.261 0V27.13h20.667a24.22 24.22 0 0 0 0-6.261Z" />
        <Path d="m30.26 30.261 10.71 10.71a24.06 24.06 0 0 0 1.411-1.541l-9.169-9.169h-2.951ZM17.739 30.261l-10.71 10.71c.492.492 1.007.962 1.54 1.41l9.17-9.169v-2.95ZM17.738 17.74 7.028 7.03a24.063 24.063 0 0 0-1.41 1.54l9.17 9.17h2.95ZM30.26 17.74 40.97 7.03a23.992 23.992 0 0 0-1.54-1.411l-9.17 9.169v2.951Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UnitedKingdomIcon;
