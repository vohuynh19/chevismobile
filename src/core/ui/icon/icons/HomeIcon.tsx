import Svg, {Path, SvgProps} from 'react-native-svg';

const HomeIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.659 2.247a1 1 0 0 0-1.318 0l-8 7A1 1 0 0 0 3 10v9a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-9a1 1 0 0 0-.341-.753l-8-7ZM16 20h2a1 1 0 0 0 1-1v-8.546l-7-6.125-7 6.125V19a1 1 0 0 0 1 1h2v-7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7Zm-6 0v-6h4v6h-4Z"
    />
  </Svg>
);

export default HomeIcon;
