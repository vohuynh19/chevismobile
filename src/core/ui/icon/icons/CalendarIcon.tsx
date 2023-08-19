import Svg, {Path, SvgProps} from 'react-native-svg';

const CalendarIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.998a.999.999 0 0 0-2 0v1.039H5c-1.105 0-2 .894-2 1.996v13.971C3 21.106 3.895 22 5 22h14c1.105 0 2-.894 2-1.996V6.033a1.998 1.998 0 0 0-2-1.996h-3V2.998a.999.999 0 0 0-2 0v1.039h-4V2.998ZM8 6.033v.957a.999.999 0 0 0 2 0v-.957h4v.957a.999.999 0 0 0 2 0v-.957h3v3.95H5v-3.95h3Zm-3 5.946v8.025h14V11.98H5Z"
    />
  </Svg>
);

export default CalendarIcon;
