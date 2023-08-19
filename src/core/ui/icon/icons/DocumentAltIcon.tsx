import Svg, {Path, SvgProps} from 'react-native-svg';

const DocumentAltIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Zm0 2h5.586L17 8.414V20H7V4Zm2.5 11.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H9.5Zm-1-2.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm1-4.5a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Z"
    />
  </Svg>
);

export default DocumentAltIcon;
