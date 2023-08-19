import Svg, {Path, SvgProps} from 'react-native-svg';

const NavigationHome2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.669 4.257a1 1 0 0 0-1.338 0l-9.669 8.702A2 2 0 0 0 5 14.445V27H4a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2h-1V14.445a2 2 0 0 0-.662-1.486L25 11.755V6.919a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.936 1.494L16.67 4.257ZM25 27V14.445l-9-8.1-9 8.1V27h5v-8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8h5Zm-7 0v-7h-4v7h4Zm5-20.081v3.036l-2-1.8V6.919h2Z"
    />
  </Svg>
);

export default NavigationHome2XIcon;
