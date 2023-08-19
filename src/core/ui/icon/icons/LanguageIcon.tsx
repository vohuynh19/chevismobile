import Svg, {Path, SvgProps} from 'react-native-svg';

const LanguageIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.657 4.73a8.034 8.034 0 0 0-3.579 3.256l.178.047c.445.118.884.223 1.315.317a10.39 10.39 0 0 1 2.086-3.62ZM4 12c0-.746.102-1.468.293-2.153l.451.12c.464.123.922.233 1.373.331A12.2 12.2 0 0 0 6 12c0 .563.037 1.097.103 1.603-.609.152-1.109.316-1.487.474l-.308.128C4.108 13.505 4 12.765 4 12Zm4 0c0-.472.03-.918.086-1.338 1.018.155 1.992.25 2.914.299v2.044a24.83 24.83 0 0 0-2.928.224A10.288 10.288 0 0 1 8 12Zm7.914 1.338A29.894 29.894 0 0 0 13 13.039v-2.044c1.078-.02 2.06-.103 2.928-.224.046.388.072.798.072 1.229 0 .472-.03.918-.086 1.338ZM13 8.995c.912-.019 1.74-.086 2.473-.18a8.367 8.367 0 0 0-1.264-2.321A7.932 7.932 0 0 0 13 5.237v3.758ZM18 12c0-.563-.037-1.097-.103-1.603a10.7 10.7 0 0 0 1.487-.474l.308-.128c.2.7.308 1.44.308 2.205 0 .746-.102 1.468-.293 2.153l-.451-.12a32.004 32.004 0 0 0-1.373-.331C17.958 13.167 18 12.6 18 12Zm.616-3.923.288-.12a8.034 8.034 0 0 0-3.561-3.227 10.394 10.394 0 0 1 2.117 3.715 8.594 8.594 0 0 0 1.156-.368ZM8.564 8.71c.851.124 1.665.203 2.436.247V5.237c-.327.27-.767.685-1.209 1.257A8.36 8.36 0 0 0 8.564 8.71ZM6.54 15.555a8.594 8.594 0 0 0-1.156.368l-.289.12a8.034 8.034 0 0 0 3.562 3.227 10.395 10.395 0 0 1-2.117-3.715Zm1.987-.37a22.996 22.996 0 0 1 2.473-.18v3.758a7.93 7.93 0 0 1-1.209-1.257 8.365 8.365 0 0 1-1.264-2.32Zm6.909.104A27.836 27.836 0 0 0 13 15.042v3.721a7.93 7.93 0 0 0 1.209-1.257 8.36 8.36 0 0 0 1.227-2.217Zm1.992.36a10.392 10.392 0 0 1-2.085 3.621 8.033 8.033 0 0 0 3.579-3.256l-.178-.047a30.141 30.141 0 0 0-1.316-.317ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
    />
  </Svg>
);

export default LanguageIcon;
