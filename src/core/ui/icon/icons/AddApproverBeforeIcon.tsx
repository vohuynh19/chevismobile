import Svg, {Path, SvgProps} from 'react-native-svg';

const AddApproverBeforeIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.015 2.629a4 4 0 1 0-6.03 0C11.2 11.469 10 13.142 10 15.596 10 19.267 12.686 20 16 20s6-.733 6-4.404c0-2.454-1.2-4.127-2.985-4.967ZM16 12c-1.286 0-2.287.373-2.934.933-.608.527-1.066 1.354-1.066 2.663 0 1.254.4 1.635.775 1.857C13.37 17.804 14.4 18 16 18s2.63-.196 3.225-.547c.376-.222.775-.603.775-1.857 0-1.309-.458-2.136-1.066-2.663C18.287 12.373 17.286 12 16 12Zm-9.5-.8.732.878a1 1 0 0 0 1.536-1.28L7.036 8.72a2 2 0 0 0-3.072 0l-1.732 2.078a1 1 0 1 0 1.536 1.28L4.5 11.2v3.738a1 1 0 0 0 2 0V11.2Z"
    />
  </Svg>
);

export default AddApproverBeforeIcon;
