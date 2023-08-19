import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationKeycloakIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M12.879 6.879a1 1 0 0 0 1.414 1.414 1 1 0 1 1 1.414 1.414 1 1 0 0 0 1.414 1.414A3 3 0 1 0 12.88 6.88Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2a7 7 0 0 0-6.639 9.225l-6.068 6.068A1 1 0 0 0 2 18v3a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-1.5H10a1 1 0 0 0 1-1V17h1.5a1 1 0 0 0 .707-.293l.78-.78A7 7 0 1 0 15 2Zm-5 7a5 5 0 1 1 3.876 4.873 1 1 0 0 0-.931.268l-.86.859H10a1 1 0 0 0-1 1v1.5H7.5a1 1 0 0 0-1 1V20H4v-1.586l6.237-6.237a1 1 0 0 0 .204-1.12A4.98 4.98 0 0 1 10 9Z"
      />
    </G>
  </Svg>
);

export default NavigationKeycloakIcon;
