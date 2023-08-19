import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SeychellesIcon = ({
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
        d="M40.2 6.294A23.912 23.912 0 0 0 24 0c-1.023 0-2.03.064-3.019.188L9.391 13.565.759 30.012a23.853 23.853 0 0 0 2.51 6.086L24 24 40.2 6.294Z"
        fill="#FFDA44"
      />
      <Path
        d="m43.981 37.297-33.578 6.48A23.886 23.886 0 0 0 24 48c8.337 0 15.679-4.25 19.981-10.703Z"
        fill="#6DA544"
      />
      <Path
        d="M40.205 6.297 3.284 36.121a24.092 24.092 0 0 0 3.439 4.535L48 24c0-7.009-3.004-13.315-7.795-17.703Z"
        fill="#D80027"
      />
      <Path
        d="M0 24c0 2.076.264 4.09.76 6.012L20.981.188C9.152 1.673 0 11.768 0 24Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SeychellesIcon;
