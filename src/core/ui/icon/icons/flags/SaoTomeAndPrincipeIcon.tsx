import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SaoTomeAndPrincipeIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#FFDA44"
      />
      <G fill="#6DA544">
        <Path d="M14.61 15.652h31.898C43.117 6.513 34.32 0 24 0A23.922 23.922 0 0 0 7.03 7.03l7.578 8.622ZM14.61 32.348h31.898C43.117 41.487 34.32 48 24 48a23.922 23.922 0 0 1-16.97-7.03l7.578-8.622Z" />
      </G>
      <Path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#D80027"
      />
      <Path
        d="m30.475 19.826 1.036 3.189h3.353l-2.713 1.97 1.036 3.189-2.712-1.97-2.712 1.97 1.036-3.189-2.713-1.97h3.353l1.036-3.189ZM40.91 19.826l1.035 3.189h3.353l-2.712 1.97 1.035 3.189-2.712-1.97-2.712 1.97 1.036-3.189-2.713-1.97h3.353l1.036-3.189Z"
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

export default SaoTomeAndPrincipeIcon;
