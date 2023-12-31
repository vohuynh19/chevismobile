import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const ZimbabweIcon = ({
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
      <G fill="#FFDA44">
        <Path d="M45.703 13.744a24.06 24.06 0 0 0-4.894-6.872L24 5.217 7.19 6.872l-.158.16 6.712 6.712L24 14.057l21.703-.313ZM7.032 40.969l.266.263 16.703 1.55 16.702-1.55a24.065 24.065 0 0 0 4.952-6.872l-31.046-.969c-2.67 2.672-5.752 5.753-7.577 7.578Z" />
      </G>
      <Path
        d="m47.763 20.616-27.936-.79L24.001 24l-4.174 4.174 27.921-.686a24.185 24.185 0 0 0 .015-6.872Z"
        fill="#000"
      />
      <Path
        d="M24 0A23.92 23.92 0 0 0 7.192 6.872h33.62A23.92 23.92 0 0 0 24 0Z"
        fill="#6DA544"
      />
      <G fill="#D80027">
        <Path d="M20.617 20.616h27.146a23.831 23.831 0 0 0-2.059-6.872H13.745l6.872 6.872ZM13.641 34.36h32.015a23.83 23.83 0 0 0 2.092-6.872H20.513l-6.872 6.872Z" />
      </G>
      <Path
        d="M24.001 48c6.493 0 12.382-2.58 16.702-6.768H7.3A23.918 23.918 0 0 0 24 48Z"
        fill="#6DA544"
      />
      <Path
        d="M8.57 5.619c-.534.448-1.049.918-1.541 1.41L23.999 24 7.03 40.97c.492.493 1.007.963 1.54 1.411L26.952 24 8.57 5.619Z"
        fill="#000"
      />
      <Path
        d="m9.65 17.739 1.553 4.783h5.03l-4.07 2.956 1.555 4.783-4.069-2.956-4.068 2.956 1.554-4.783-4.069-2.956h5.03l1.553-4.783Z"
        fill="#D80027"
      />
      <Path
        d="m13.925 24.391-4.05-1.434s-.3-2.808-.318-2.903a1.566 1.566 0 1 0-3.046.707l-1.135 1.143h2.019C7.395 24 5.83 24 5.83 26.087l.868 2.087h5.217l.87-2.087c.086-.2.14-.407.161-.613.75-.303.978-1.083.978-1.083Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ZimbabweIcon;
