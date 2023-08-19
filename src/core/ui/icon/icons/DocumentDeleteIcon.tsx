import Svg, {G, Path, SvgProps} from 'react-native-svg';

const DocumentDeleteIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" {...props}>
    <G stroke="#312B78" strokeWidth={2} strokeLinecap="round">
      <Path d="M14.8 3.5H8a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10.16a.99.99 0 0 0-.24-.647c-.785-.91-3.333-3.834-5.272-5.735A.981.981 0 0 0 14.8 3.5ZM16.333 15.167h-4.666" />
    </G>
  </Svg>
);

export default DocumentDeleteIcon;
