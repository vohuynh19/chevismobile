import Svg, {G, Path, SvgProps} from 'react-native-svg';

const InfoIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M12 8.5a1 1 0 0 1 1 1v.02a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1ZM13 12.5a1 1 0 1 0-2 0V16a1 1 0 1 0 2 0v-3.5Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Zm0 2h5.586L17 8.414V20H7V4Z"
      />
      <Path d="M12 8.5a1 1 0 0 1 1 1v.02a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1ZM13 12.5a1 1 0 1 0-2 0V16a1 1 0 1 0 2 0v-3.5Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Zm0 2h5.586L17 8.414V20H7V4Z"
      />
    </G>
  </Svg>
);

export default InfoIcon;
