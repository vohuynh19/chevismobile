import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationInbox2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path d="M17 4a1 1 0 0 0-2 0v10.667l-2.293-2.293a1 1 0 0 0-1.414 1.415l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.415L17 14.667V4Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18a2 2 0 0 1 2-2h2.593a2 2 0 0 1 2 2v4h12.814v-4a2 2 0 0 1 2-2H27a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Zm2 0v9h22v-9h-2.593v4a2 2 0 0 1-2 2H9.593a2 2 0 0 1-2-2v-4H5Z"
      />
    </G>
  </Svg>
);

export default NavigationInbox2XIcon;
