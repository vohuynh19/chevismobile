import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const DemocraticRepublicOfCongoIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M45.335 12.995A23.985 23.985 0 0 0 40.97 7.03a23.983 23.983 0 0 0-5.966-4.364L18.096 18.097 2.665 35.005a23.985 23.985 0 0 0 4.364 5.966 23.988 23.988 0 0 0 5.966 4.364l16.908-15.432 15.432-16.908Z"
        fill="#FFDA44"
      />
      <Path
        d="M7.029 40.971a24.152 24.152 0 0 0 3.208 2.696l33.43-33.43a24.139 24.139 0 0 0-5.904-5.903l-33.43 33.43A24.143 24.143 0 0 0 7.03 40.97Z"
        fill="#D80027"
      />
      <G fill="#338AF3">
        <Path d="M7.029 7.029C-.543 14.6-1.997 25.972 2.665 35.005l32.34-32.34C25.972-1.997 14.6-.543 7.029 7.03ZM40.971 40.971c7.572-7.571 9.026-18.943 4.364-27.975l-32.34 32.339c9.033 4.662 20.404 3.208 27.976-4.364Z" />
      </G>
      <Path
        d="m12.79 7.304 1.295 3.986h4.191l-3.39 2.463 1.295 3.986-3.39-2.464-3.392 2.464 1.296-3.986-3.391-2.463h4.19l1.296-3.986Z"
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

export default DemocraticRepublicOfCongoIcon;
