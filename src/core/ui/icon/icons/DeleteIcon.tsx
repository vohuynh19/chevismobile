import Svg, {Path, SvgProps} from 'react-native-svg';

const DeleteIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2a2 2 0 0 0-2 2v2H4a1 1 0 0 0 0 2h.08L5 19.046A3 3 0 0 0 8 22h8a3 3 0 0 0 3-2.954L19.92 8H20a1 1 0 1 0 0-2h-4V4a2 2 0 0 0-2-2h-4Zm4 4V4h-4v2h4ZM9 8H6.087l.91 10.917A1 1 0 0 1 7 19a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 1 1 0 0 1 .003-.083L17.913 8H9Zm1 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Z"
    />
  </Svg>
);

export default DeleteIcon;
