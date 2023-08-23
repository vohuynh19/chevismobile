import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationSecurityIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M16.207 10.707a1 1 0 1 0-1.414-1.414L11.5 12.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.177 2.615a2.077 2.077 0 0 0-2.354 0c-2.524 1.74-4.965 2.47-6.178 2.746-.89.202-1.683 1.012-1.599 2.093.104 1.33.444 3.939 1.576 6.673 1.135 2.74 3.09 5.665 6.45 7.515a1.928 1.928 0 0 0 1.856 0c3.36-1.85 5.316-4.776 6.45-7.515 1.132-2.735 1.472-5.342 1.576-6.673.084-1.08-.71-1.891-1.599-2.093-1.213-.277-3.654-1.005-6.178-2.746Zm-1.22 1.647A.073.073 0 0 1 12 4.25c.017 0 .031.004.042.012 2.796 1.928 5.496 2.736 6.87 3.049a.132.132 0 0 1 .045.02c-.097 1.224-.413 3.583-1.427 6.031-1.017 2.455-2.708 4.94-5.53 6.508-2.822-1.567-4.513-4.053-5.53-6.508-1.014-2.448-1.33-4.807-1.427-6.031a.133.133 0 0 1 .046-.02c1.373-.313 4.073-1.12 6.869-3.049Z"
      />
    </G>
  </Svg>
);

export default NavigationSecurityIcon;