import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BonaireIcon = ({
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
        d="M7.03 7.03C1.885 12.172-.435 19.07.067 25.796L25.797.067C19.07-.433 12.173 1.887 7.029 7.03Z"
        fill="#FFDA44"
      />
      <Path
        d="M8.57 42.382c9.43 7.933 23.525 7.464 32.4-1.411 8.876-8.876 9.345-22.972 1.412-32.401L8.57 42.382Z"
        fill="#0052B4"
      />
      <Path
        d="m23.915 23.033 2.068-1.12-2.069-1.12a7.31 7.31 0 0 0-6.098-6.099l-1.12-2.068-1.12 2.068a7.31 7.31 0 0 0-6.1 6.099l-2.067 1.12 2.068 1.12a7.31 7.31 0 0 0 6.098 6.099l1.12 2.068 1.12-2.068a7.31 7.31 0 0 0 6.1-6.099Zm-7.22 3.054a4.174 4.174 0 1 1 0-8.348 4.174 4.174 0 0 1 0 8.348Z"
        fill="#000"
      />
      <Path
        d="m16.696 18.783.903 1.565h1.808l-.904 1.565.904 1.565h-1.808l-.903 1.565-.904-1.565h-1.807l.903-1.565-.903-1.565h1.807l.904-1.565Z"
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

export default BonaireIcon;
