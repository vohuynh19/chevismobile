import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const DjiboutiIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M21.913 26.087S7.043 7.027 7.029 7.029A23.925 23.925 0 0 1 24 0c13.255 0 24 10.745 24 24l-26.087 2.087Z"
        fill="#338AF3"
      />
      <Path
        d="M21.913 24S7.043 40.974 7.029 40.97A23.925 23.925 0 0 0 24 48c13.255 0 24-10.745 24-24H21.913Z"
        fill="#6DA544"
      />
      <Path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#F0F0F0"
      />
      <Path
        d="m9.713 17.739 1.554 4.783h5.03l-4.069 2.956 1.554 4.783-4.069-2.956-4.068 2.956 1.554-4.783-4.069-2.956h5.03l1.553-4.783Z"
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

export default DjiboutiIcon;
