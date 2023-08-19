import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const DenmarkIcon = ({
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
      <G fill="#D80027">
        <Path d="M18.783 20.87h29.014C46.263 9.094 36.194 0 24 0c-1.792 0-3.538.198-5.218.57v20.3ZM12.522 20.87V2.917C5.932 6.514 1.214 13.11.203 20.87h12.319ZM12.522 27.13H.203c1.011 7.76 5.729 14.356 12.319 17.952V27.13ZM18.782 27.13v20.3c1.68.372 3.426.57 5.218.57 12.194 0 22.263-9.094 23.797-20.87H18.783Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DenmarkIcon;
