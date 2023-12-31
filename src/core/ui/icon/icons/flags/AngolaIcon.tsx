import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const AngolaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24c-1.043 0-24 3.13-24 3.13L0 24Z"
        fill="#D80027"
      />
      <Path d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24" fill="#000" />
      <G fill="#FFDA44">
        <Path d="m20.71 19.089 2.034 1.476-.776 2.391 2.034-1.479 2.034 1.477-.778-2.39 2.033-1.48-2.514.002-.779-2.39-.775 2.391-2.514.002Z" />
        <Path d="M30 13.608a11.923 11.923 0 0 0-6-1.604v3.13a8.81 8.81 0 0 1 4.435 1.185c4.235 2.445 5.692 7.88 3.246 12.116-2.445 4.235-7.88 5.692-12.116 3.246a8.812 8.812 0 0 1-2.964-2.796l-2.613 1.726A11.923 11.923 0 0 0 18 34.392C23.73 37.701 31.084 35.73 34.392 30 37.701 24.27 35.73 16.916 30 13.608Z" />
        <Path d="M17.08 21.913a3.13 3.13 0 0 0 1.245 4.249l10.167 5.555c-.692 1.264-.325 2.803.94 3.494l2.746 1.502a2.609 2.609 0 0 0 3.54-1.036l1.503-2.747-20.14-11.017Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AngolaIcon;
