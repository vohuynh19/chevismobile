import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const MadagascarIcon = ({
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
      <Path
        d="M15.652 24v22.507C18.252 47.472 21.064 48 24 48c13.255 0 24-10.745 24-24s-32.348 0-32.348 0Z"
        fill="#6DA544"
      />
      <Path
        d="M24 0c-2.936 0-5.748.528-8.348 1.493V24H48C48 10.745 37.255 0 24 0Z"
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

export default MadagascarIcon;
