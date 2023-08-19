import Svg, {Path, SvgProps} from 'react-native-svg';

const EditIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.293 2.334a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-.707.293h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707l8-8ZM18 4.455l-7 7v1.586h1.586l7-7L18 4.455ZM4 6a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H6v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
    />
  </Svg>
);

export default EditIcon;
