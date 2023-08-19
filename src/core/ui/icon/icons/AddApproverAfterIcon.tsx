import Svg, {Path, SvgProps} from 'react-native-svg';

const AddApproverAfterIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.015 2.629a4 4 0 1 0-6.03 0C11.2 11.469 10 13.142 10 15.596 10 19.267 12.686 20 16 20s6-.733 6-4.404c0-2.454-1.2-4.127-2.985-4.967ZM16 12c-1.286 0-2.287.373-2.934.933-.608.527-1.066 1.354-1.066 2.663 0 1.254.4 1.635.775 1.857C13.37 17.804 14.4 18 16 18s2.63-.196 3.224-.547c.377-.222.776-.603.776-1.857 0-1.309-.458-2.136-1.066-2.663C18.287 12.373 17.286 12 16 12ZM5.5 8.438a1 1 0 0 1 1 1v4.8l.732-.878a1 1 0 0 1 1.536 1.28l-1.732 2.078a2 2 0 0 1-3.072 0L2.232 14.64a1 1 0 0 1 1.536-1.28l.732.878v-4.8a1 1 0 0 1 1-1Z"
    />
  </Svg>
);

export default AddApproverAfterIcon;
