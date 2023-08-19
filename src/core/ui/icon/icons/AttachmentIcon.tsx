import Svg, {Path, SvgProps} from 'react-native-svg';

const AttachmentIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.834 12.135a4.25 4.25 0 0 0 6.01 6.01l2.06-2.06a1 1 0 1 1 1.415 1.414l-2.06 2.06a6.25 6.25 0 0 1-8.84-8.838l3.36-3.36 1.413-1.413L11.96 4.18a4.5 4.5 0 1 1 6.364 6.364l-3.182 3.182-3.005 3.005a2.75 2.75 0 0 1-3.89-3.89l4.42-4.419a1 1 0 1 1 1.415 1.415l-4.42 4.42a.75.75 0 0 0 1.06 1.06l3.006-3.005L16.91 9.13a2.5 2.5 0 0 0-3.536-3.536l-1.767 1.768-1.415 1.414-3.358 3.359Z"
    />
  </Svg>
);

export default AttachmentIcon;
