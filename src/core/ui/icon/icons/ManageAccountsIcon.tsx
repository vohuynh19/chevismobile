import Svg, {Path, SvgProps} from 'react-native-svg';

const ManageAccountsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14.58 13.3a3.24 3.24 0 0 0 .71-2 3.29 3.29 0 1 0-6.58 0 3.24 3.24 0 0 0 .71 2 5 5 0 0 0-2 2.31 1 1 0 1 0 1.84.78A3 3 0 0 1 12 14.57a3 3 0 0 1 2.75 1.82 1 1 0 1 0 1.84-.78 5 5 0 0 0-2.01-2.31ZM12 12.57a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58ZM18 4H6a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h2.59l2.7 2.71A1 1 0 0 0 12 24a1 1 0 0 0 .65-.24L15.87 21H18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1h-2.5a1 1 0 0 0-.65.24l-2.8 2.4-2.34-2.35A1 1 0 0 0 9 19H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11Z" />
  </Svg>
);

export default ManageAccountsIcon;
