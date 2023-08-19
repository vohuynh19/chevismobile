import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const SouthAfricaIcon = ({
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
        d="M7.029 40.97c-9.373-9.372-9.373-24.568 0-33.94L20.869 24 7.03 40.97Z"
        fill="#000"
      />
      <Path
        d="M20.87 24 3.183 12.048a23.916 23.916 0 0 0-1.447 2.978L10.69 24l-8.954 8.975a23.89 23.89 0 0 0 1.446 2.975L20.87 24Z"
        fill="#FFDA44"
      />
      <Path
        d="M47.797 20.87H20.869L7.029 7.03a24.093 24.093 0 0 0-3.846 5.018L15.11 24 3.181 35.95a24.092 24.092 0 0 0 3.848 5.02l13.84-13.84h26.928a24.237 24.237 0 0 0 0-6.26Z"
        fill="#6DA544"
      />
      <Path
        d="M9.387 43.038A23.893 23.893 0 0 0 24 48c11.089 0 20.42-7.52 23.174-17.739H22.165L9.387 43.038Z"
        fill="#0052B4"
      />
      <Path
        d="M47.173 17.74C44.419 7.52 35.088 0 23.999 0A23.893 23.893 0 0 0 9.387 4.962l12.778 12.777h25.008Z"
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

export default SouthAfricaIcon;
