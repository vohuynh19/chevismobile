import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const NepalIcon = ({
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
        <Path d="M47.86 26.609v-.001ZM47.858 26.609v-.001L21.538.125c-1.187.12-2.349.328-3.478.616C7.678 3.384 0 24 0 24s33.6 22.484 37.433 19.89a24.12 24.12 0 0 0 2.202-1.683L24.037 26.61h23.821Z" />
      </G>
      <Path
        d="M41.74 24 18.397.659C7.846 3.182 0 12.674 0 24c0 13.255 10.745 24 24 24 5.028 0 9.694-1.547 13.55-4.19L17.74 24h24Z"
        fill="#D80027"
      />
      <G fill="#F0F0F0">
        <Path d="m22.825 35.437-2.931-1.379 1.56-2.839-3.182.61-.403-3.216-2.217 2.365-2.217-2.365-.404 3.215-3.182-.609 1.56 2.84-2.93 1.378 2.93 1.378-1.56 2.84 3.183-.61.403 3.216 2.217-2.365 2.217 2.365.403-3.216 3.183.61-1.561-2.84 2.931-1.378ZM20.869 13.31l-2.132-1.002 1.135-2.064-2.315.443-.293-2.34-1.612 1.72-1.613-1.72-.293 2.34-2.315-.443 1.135 2.064-2.132 1.003 5.218 1.043 5.217-1.043Z" />
        <Path d="M21.914 13.31a6.261 6.261 0 0 1-12.522 0" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NepalIcon;
