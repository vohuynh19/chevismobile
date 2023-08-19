import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const GuineaBissauIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 0c-2.166 0-4.265.289-6.26.827L15.651 24l2.087 23.173c1.996.538 4.095.827 6.261.827 13.255 0 24-10.745 24-24S37.255 0 24 0Z"
        fill="#FFDA44"
      />
      <Path
        d="m15.652 24 2.087 23.173c1.996.538 4.095.827 6.261.827 13.255 0 24-10.745 24-24H15.652Z"
        fill="#6DA544"
      />
      <G fill="#D80027">
        <Path d="M0 24c0 9.097 5.062 17.011 12.522 21.082V2.918C5.062 6.988 0 14.903 0 24Z" />
        <Path d="M0 24c0 11.089 7.52 20.42 17.74 23.173V.827C7.52 3.58 0 12.91 0 24Z" />
      </G>
      <Path
        d="m9.07 17.74 1.553 4.782h5.03l-4.069 2.956 1.554 4.783-4.069-2.956-4.068 2.956 1.554-4.783-4.069-2.956h5.03l1.553-4.783Z"
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

export default GuineaBissauIcon;
