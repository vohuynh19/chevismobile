import Svg, {Path, SvgProps} from 'react-native-svg';

const DragUpDownIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.293 6.293a1 1 0 0 0 1.414 1.414L12 4.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4Zm9.414 11.414a1 1 0 0 0-1.414-1.414L12 19.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4ZM3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
    />
  </Svg>
);

export default DragUpDownIcon;
