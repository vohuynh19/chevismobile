import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const CroatiaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.949 23.949 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.949 23.949 0 0 0 48 24Z"
        fill="#F0F0F0"
      />
      <Path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#0052B4"
      />
      <Path
        d="M1.493 15.652h45.015C43.115 6.513 34.319 0 24 0 13.681 0 4.884 6.513 1.493 15.652Z"
        fill="#D80027"
      />
      <G fill="#338AF3">
        <Path d="M30.26 16.696h-4.173l.695-5.218 2.783-2.087 2.783 2.087v4.174l-2.087 1.044ZM17.74 16.696h4.173l-.696-5.218-2.782-2.087-2.783 2.087v4.174l2.087 1.044Z" />
      </G>
      <Path
        d="M26.783 16.696h-5.566v-5.218L24 9.391l2.783 2.087v5.218Z"
        fill="#0052B4"
      />
      <Path
        d="M15.652 15.652v11.479a8.34 8.34 0 0 0 3.357 6.687l1.46-.366 1.844 1.855a8.353 8.353 0 0 0 3.365.002l2.105-1.752 1.208.258a8.338 8.338 0 0 0 3.357-6.684V15.652H15.652Z"
        fill="#F0F0F0"
      />
      <G fill="#D80027">
        <Path d="M18.991 15.652h-3.339v3.34h3.34v-3.34ZM25.67 15.652h-3.34v3.34h3.34v-3.34ZM32.348 15.652h-3.34v3.34h3.34v-3.34Z" />
        <Path d="M22.33 18.991h-3.339v3.34h3.34v-3.34ZM29.009 18.991h-3.34v3.34h3.34v-3.34Z" />
        <Path d="M18.991 22.33h-3.339v3.338h3.34V22.33ZM22.33 25.669h-3.339v3.339h3.34v-3.34ZM25.67 22.33h-3.34v3.338h3.34V22.33ZM32.348 22.33h-3.34v3.338h3.34V22.33ZM29.009 25.669h-3.34v3.339h3.34v-3.34Z" />
        <Path d="M25.67 29.008h-3.34v3.339h3.34v-3.34ZM18.991 29.008h-3.123a8.322 8.322 0 0 0 1.622 3.34h1.502v-3.34ZM29.009 32.347h1.501a8.321 8.321 0 0 0 1.622-3.339H29.01v3.34Z" />
        <Path d="M18.991 32.347v1.457a8.314 8.314 0 0 0 3.34 1.506v-2.963h-3.34ZM25.67 32.347v2.963a8.311 8.311 0 0 0 3.339-1.506v-1.457h-3.34Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CroatiaIcon;
