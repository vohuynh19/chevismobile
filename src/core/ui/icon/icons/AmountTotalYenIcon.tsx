import Svg, {G, Path, SvgProps} from 'react-native-svg';

const AmountTotalYenIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M11.5 19.5v-1.459h-3V16.5h3V15h-3l3-5h-2l-2 3.5-2-3.5h-2l3 5h-3v1.5h3v1.541h-3V19.5h3V21h2v-1.5h3Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 4a2 2 0 0 1 2-2h5.586a2 2 0 0 1 1.414.586L19.914 7a2 2 0 0 1 .586 1.414V20a2 2 0 0 1-2 2h-4a1 1 0 1 1 0-2h4V8.414L14.086 4H8.5v3a1 1 0 0 1-2 0V4Z"
      />
    </G>
  </Svg>
);

export default AmountTotalYenIcon;
