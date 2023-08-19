import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationNetworkIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 2a4 4 0 0 0-3.99 4.276l-4.652 1.55A3.998 3.998 0 0 0 6 6a4 4 0 1 0 3.99 3.724l4.652-1.55a4.021 4.021 0 0 0 1.184 1.184l-1.55 4.651a3.982 3.982 0 0 0-2.308.544l-2.522-2.521a4.02 4.02 0 0 1-1.414 1.414l2.522 2.522a4 4 0 1 0 5.62-1.326l1.55-4.651A4 4 0 1 0 18 2Zm-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM6 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
  </Svg>
);

export default NavigationNetworkIcon;
