import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const CentralAfricanRepublicIcon = ({
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
      <G fill="#0052B4">
        <Path d="M45.082 12.522C41.981 6.838 36.648 2.547 30.262.825l-1.044 11.697h15.864ZM2.918 12.522h15.865L17.739.825C11.352 2.547 6.02 6.838 2.92 12.522Z" />
      </G>
      <G fill="#6DA544">
        <Path d="M29.218 24v11.478h15.864A23.892 23.892 0 0 0 48 24H29.218ZM18.783 24H0c0 4.158 1.058 8.069 2.918 11.478h15.864V24Z" />
      </G>
      <G fill="#FFDA44">
        <Path d="M2.918 35.478c3.102 5.684 8.434 9.975 14.821 11.697l1.044-10.23-15.865-1.467ZM30.261 47.175c6.387-1.722 11.72-6.013 14.821-11.697l-15.864 1.467 1.043 10.23Z" />
        <Path d="m29.218 36.945 15.864-1.467H29.218v1.467ZM18.783 35.478H2.918l15.865 1.467v-1.467Z" />
      </G>
      <Path
        d="M24 0c-2.166 0-4.264.289-6.26.827v46.346c1.996.538 4.094.827 6.26.827 2.166 0 4.265-.289 6.261-.827V.827A24.026 24.026 0 0 0 24.001 0Z"
        fill="#D80027"
      />
      <Path
        d="m12.91 5.217.647 1.993h2.095l-1.695 1.232.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.696-1.232h2.096l.647-1.993Z"
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

export default CentralAfricanRepublicIcon;
