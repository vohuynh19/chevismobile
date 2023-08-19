import Svg, {Path, SvgProps} from 'react-native-svg';

const OutboxIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.707 2.293A.995.995 0 0 0 12.01 2a.997.997 0 0 0-.716.293l-3 3a1 1 0 0 0 1.414 1.414L11 5.414V13a1 1 0 0 0 2 0V5.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3ZM2 14a2 2 0 0 1 2-2h1.444a2 2 0 0 1 2 2v2h9.112v-2a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm2 0v6h16v-6h-1.444v2a2 2 0 0 1-2 2H7.444a2 2 0 0 1-2-2v-2H4Z"
    />
  </Svg>
);

export default OutboxIcon;
