import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationPasses2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 26.933h-4.267v-4.266H32v4.266ZM26.933 26.933h-4.266v-4.266h4.266v4.266ZM26.933 32h-4.266v-4.267h4.266V32Z"
      />
      <Path d="M27.733 27.733h1.6v1.6h-1.6v-1.6ZM27.733 30.4h1.6V32h-1.6v-1.6ZM30.4 27.733H32v1.6h-1.6v-1.6ZM30.4 30.4H32V32h-1.6v-1.6Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a2 2 0 0 1 2-2h22c1.099 0 2 .885 2 1.995v13.672a1 1 0 1 1-2 0V5H5v22h13.667a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2V5Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 9.667H4v-2h24v2ZM28 14.333H4v-2h24v2ZM11 19H4v-2h7a2 2 0 0 1 2 2v2h6v-2a2 2 0 0 1 2-2h7v2h-7v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2Z"
      />
    </G>
  </Svg>
);

export default NavigationPasses2XIcon;
