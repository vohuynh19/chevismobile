import Svg, {G, Path, SvgProps} from 'react-native-svg';

const DocumentTypePdfIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V11h-2V8.414L12.586 4H7v7H5V4ZM6.483 16.343h.527c.289 0 .501-.068.637-.204.142-.142.213-.334.213-.578 0-.25-.077-.425-.23-.527-.153-.102-.37-.153-.654-.153h-.493v1.462ZM11.654 18.077h.085c.267 0 .507-.045.723-.136.215-.09.385-.252.51-.485.13-.232.195-.563.195-.994 0-.43-.065-.756-.195-.977a.952.952 0 0 0-.51-.46 1.953 1.953 0 0 0-.723-.127h-.085v3.179Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7Zm3.02 6.25v-5.525h2.024c.402 0 .773.057 1.113.17.34.113.612.303.816.57.21.266.315.631.315 1.096 0 .448-.105.816-.315 1.105a1.809 1.809 0 0 1-.816.629 2.837 2.837 0 0 1-1.08.204h-.594v1.751H5.02Zm5.172 0v-5.525h1.632c.561 0 1.054.094 1.48.28.43.182.764.474 1.002.876s.357.93.357 1.581c0 .652-.119 1.184-.357 1.598a2.176 2.176 0 0 1-.977.901c-.414.193-.887.289-1.42.289h-1.717Zm5.454 0v-5.525h3.604v1.224h-2.142v1.054h1.836v1.224h-1.836v2.023h-1.462Z"
      />
    </G>
  </Svg>
);

export default DocumentTypePdfIcon;
