import Svg, {Path, SvgProps} from 'react-native-svg';

const FilterTrueIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.126 7H5a1 1 0 0 0 0 2h9.126a4.01 4.01 0 0 1 0-2Zm1.228 4H8a1 1 0 1 0 0 2h8a1 1 0 0 0 .992-1.128A3.991 3.991 0 0 1 15.354 11ZM10 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
    />
    <Path d="M20 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
);

export default FilterTrueIcon;
