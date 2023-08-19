import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationInsightsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="m19.293 8.707-3.074-3.074-3.07 5.372a1.5 1.5 0 0 1-2.202.455L8.094 9.32l-3.387 3.387a1 1 0 0 1-1.414-1.414L6.986 7.6a1.5 1.5 0 0 1 1.96-.14l2.748 2.06 3.113-5.448a1.5 1.5 0 0 1 2.363-.316l3.537 3.537a1 1 0 0 1-1.414 1.414ZM9 14a1 1 0 1 0-2 0v5.5a1 1 0 1 0 2 0V14ZM12 15a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V16a1 1 0 0 1 1-1Z" />
      <Path d="M17 11a1 1 0 1 0-2 0v8.5a1 1 0 1 0 2 0V11ZM21 13v6.5a1 1 0 1 1-2 0V13a1 1 0 1 1 2 0ZM5 17a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0V17Z" />
    </G>
  </Svg>
);

export default NavigationInsightsIcon;
