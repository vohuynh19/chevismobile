import Svg, {Path, SvgProps} from 'react-native-svg';

const FilterFalseIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm3 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm4 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
    />
  </Svg>
);

export default FilterFalseIcon;
