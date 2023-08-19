import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  RadialGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const WalletIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none" {...props}>
    <Path
      d="M8.413 14.066c.201-1.591 1.392-2.876 2.953-3.241 4.562-1.067 8.737-1.857 15.75-1.824a1.49 1.49 0 0 1 1.45 1.195c1.126 5.508 1.907 9.322 1.106 14.545-.18 1.173-1.134 2.058-2.302 2.27-6.82 1.233-9.88 2.51-16.5 1.771-1.242-.139-2.22-1.122-2.386-2.361-.606-4.52-.658-7.705-.07-12.355Z"
      fill="#18143E"
    />
    <G filter="url(#a)">
      <Path
        d="M8.48 14.043a2.918 2.918 0 0 1 2.611-2.527c6.947-.69 11.659-.69 18.65.01a2.912 2.912 0 0 1 2.587 2.397c.89 5.219.904 8.835-.007 13.948a2.89 2.89 0 0 1-2.429 2.342c-7.177 1.063-11.922 1.03-18.925.014a2.914 2.914 0 0 1-2.473-2.506c-.638-4.933-.674-8.5-.015-13.678Z"
        fill="url(#b)"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.192 17a.71.71 0 0 1 .71.656c.14 1.936.13 3.762-.032 5.697a.71.71 0 0 1-.71.647h-5.723A1.437 1.437 0 0 1 26 22.563v-4.126c0-.794.643-1.437 1.437-1.437h5.755Z"
      fill="url(#c)"
    />
    <Circle cx={28.5} cy={20.5} r={1.5} fill="url(#d)" />
    <Defs>
      <LinearGradient
        id="b"
        x1={10.747}
        y1={11.556}
        x2={29.084}
        y2={30.103}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#48419E" />
        <Stop offset={1} stopColor="#231C75" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={27.067}
        y1={16.417}
        x2={33.084}
        y2={22.589}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#9F98F0" />
        <Stop offset={1} stopColor="#6A62C5" />
      </LinearGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(64.011 -1.66 32.114) scale(2.51207)">
        <Stop stopColor="#3D3881" />
        <Stop offset={1} stopColor="#221C6B" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default WalletIcon;
