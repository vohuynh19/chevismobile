import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationTumbsUpIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.126 2.428a2 2 0 0 0-2.327.405L7.709 8.11a2 2 0 0 0-.56 1.388V18a2 2 0 0 0 2 2h7.7a2 2 0 0 0 1.809-1.148l3.052-6.478c.938-1.99-.514-4.279-2.713-4.279h-3.394l.713-3.405a2 2 0 0 0-1.07-2.202l-.12-.06Zm-.888 1.793.12.059-.965 4.61-.252 1.205h5.856a1 1 0 0 1 .904 1.426L16.85 18h-7.7V9.499l5.09-5.278ZM5.15 10a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0v-9Z"
    />
  </Svg>
);

export default NavigationTumbsUpIcon;
