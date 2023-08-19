import Svg, {Path, SvgProps} from 'react-native-svg';

const CreateInvoiceIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2a2 2 0 0 0-2 2v6a1 1 0 1 0 2 0V4h5.586L17 8.414V20h-5a1 1 0 1 0 0 2h5a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7ZM5 21v-2H3a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2H7v2a1 1 0 1 1-2 0Z"
    />
  </Svg>
);

export default CreateInvoiceIcon;
