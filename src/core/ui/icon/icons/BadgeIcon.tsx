import Svg, {Path, SvgProps} from 'react-native-svg';

const BadgeIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.166 2.416a1.2 1.2 0 0 1 1.668 0l.993.96 1.368-.193a1.2 1.2 0 0 1 1.35.982l.239 1.36 1.22.649a1.2 1.2 0 0 1 .516 1.587l-.607 1.242.607 1.242a1.2 1.2 0 0 1-.516 1.587l-1.22.648-.239 1.361a1.2 1.2 0 0 1-1.35.982l-1.368-.194-.993.961a1.2 1.2 0 0 1-1.668 0l-.993-.96-1.368.193a1.2 1.2 0 0 1-1.35-.982l-.239-1.36-1.22-.649a1.2 1.2 0 0 1-.516-1.587l.607-1.242-.607-1.242a1.2 1.2 0 0 1 .516-1.587l1.22-.648.239-1.361a1.2 1.2 0 0 1 1.35-.982l1.368.194.993-.961ZM12 11.504a2.5 2.5 0 1 0-.001-5 2.5 2.5 0 0 0 .001 5Zm0 1.5a4 4 0 0 0 4-4 4 4 0 1 0-4 4Zm-5 7.41v-5.006c.549.439 1.253.69 2 .672v3.241l2.019-1.747a1.5 1.5 0 0 1 1.962 0L15 19.322v-3.24a3.088 3.088 0 0 0 2-.673v5.007c0 1.285-1.51 1.975-2.481 1.134l-2.52-2.179-2.518 2.18C8.509 22.39 7 21.7 7 20.413Z"
    />
  </Svg>
);

export default BadgeIcon;
