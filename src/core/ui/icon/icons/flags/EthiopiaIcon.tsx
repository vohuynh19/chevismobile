import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const EthiopiaIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087A23.945 23.945 0 0 0 48 24c0-2.895-.513-5.671-1.453-8.241L24 13.565 1.453 15.76A23.951 23.951 0 0 0 0 23.999Z"
        fill="#FFDA44"
      />
      <Path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#D80027"
      />
      <Path
        d="M24 0C13.681 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#6DA544"
      />
      <Path
        d="M24 35.478c6.34 0 11.478-5.139 11.478-11.478 0-6.34-5.139-11.478-11.478-11.478-6.34 0-11.478 5.139-11.478 11.478 0 6.34 5.139 11.478 11.478 11.478Z"
        fill="#0052B4"
      />
      <G fill="#FFDA44">
        <Path d="m23.997 15.112 2.073 6.377h6.715L27.35 25.43l2.088 6.396-5.44-3.96-5.433 3.953 2.08-6.389-5.43-3.941h6.71l2.072-6.377Z" />
        <Path d="m32.262 25.587-6.574-2.136 4.063-5.591-1.689-1.227L24 22.225l-4.062-5.592-1.689 1.227 4.063 5.592-6.574 2.135.645 1.985 6.574-2.136v6.912h2.087v-6.912l6.573 2.136.645-1.985Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EthiopiaIcon;