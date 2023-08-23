import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const CapeVerdeIcon = ({
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
        <Path d="M24 48c7.274 0 13.792-3.237 18.193-8.348H5.807C10.208 44.763 16.726 48 24 48ZM48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 2.166.289 4.265.827 6.26h46.346c.538-1.995.827-4.094.827-6.26Z" />
      </G>
      <Path
        d="M1.907 33.391a23.906 23.906 0 0 0 1.616 3.13h40.954a23.951 23.951 0 0 0 1.615-3.13H1.908Z"
        fill="#D80027"
      />
      <G fill="#FFDA44">
        <Path d="m17.155 25.565.389 1.196H18.8l-1.017.739.389 1.196-1.018-.74-1.017.74.389-1.196-1.017-.74h1.257l.388-1.195ZM17.155 41.217l.389 1.196H18.8l-1.017.739.389 1.196-1.018-.74-1.017.74.389-1.196-1.017-.739h1.257l.388-1.196ZM9.87 35.924l.388 1.196h1.257l-1.017.739.388 1.195-1.017-.739-1.017.74.389-1.197-1.017-.738H9.48l.388-1.196ZM12.652 27.13l.389 1.196h1.257l-1.017.74.388 1.195-1.017-.74-1.017.74.389-1.196-1.018-.739h1.258l.388-1.196ZM8.224 32.054H9.48l.388-1.195.389 1.195h1.257l-1.017.74.388 1.195-1.017-.739-1.017.739.389-1.196-1.017-.739ZM11.635 42.554l.389-1.195-1.018-.74h1.258l.388-1.195.389 1.196h1.257l-1.017.739.388 1.195-1.017-.739-1.017.74ZM24.438 35.924l-.388 1.196h-1.257l1.017.739-.389 1.195 1.017-.739 1.018.74-.389-1.197 1.017-.738h-1.257l-.389-1.196ZM21.655 27.13l-.388 1.196H20.01l1.017.74-.389 1.195 1.017-.74 1.018.74-.389-1.196 1.017-.739h-1.257l-.389-1.196ZM26.084 32.054h-1.257l-.389-1.195-.388 1.195h-1.257l1.017.74-.389 1.195 1.018-.739 1.017.739-.389-1.196 1.017-.739ZM22.673 42.554l-.389-1.195 1.017-.74h-1.257l-.389-1.195-.388 1.196H20.01l1.017.739-.389 1.195 1.018-.739 1.017.74Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CapeVerdeIcon;