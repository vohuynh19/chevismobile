import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationReconciliation2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M7 5a2 2 0 0 1 2-2h7.92a2 2 0 0 1 1.413.586l6.081 6.08A2 2 0 0 1 25 11.082V27a2 2 0 0 1-2 2h-7a1 1 0 1 1 0-2h7V11.08L16.92 5H9v5.667a1 1 0 1 1-2 0V5Z" />
      <Path d="M12.53 18.136a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0Z" />
      <Path d="M9.82 15.23a4.011 4.011 0 1 1 5.737 5.607l-1.027 1.027a.75.75 0 1 1-1.06-1.06l1.027-1.028a2.511 2.511 0 1 0-3.593-3.51L9.71 17.518a.75.75 0 1 1-1.085-1.036L9.82 15.23Zm-3.29 4.24a.75.75 0 0 1 0 1.06l-1 1a2.55 2.55 0 1 0 3.606 3.607l1-1a.75.75 0 0 1 1.061 1.06l-1 1A4.05 4.05 0 1 1 4.47 20.47l1-1a.75.75 0 0 1 1.06 0Z" />
    </G>
  </Svg>
);

export default NavigationReconciliation2XIcon;
