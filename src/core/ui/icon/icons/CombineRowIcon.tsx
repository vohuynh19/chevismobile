import Svg, {G, Path, SvgProps} from 'react-native-svg';

const CombineRowIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M9.293 16.207a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L13 15.914V18a1 1 0 1 1-2 0v-2.086l-.293.293a1 1 0 0 1-1.414 0ZM14.707 7.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293V6a1 1 0 1 1 2 0v2.086l.293-.293a1 1 0 0 1 1.414 0Z" />
      <Path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5a1 1 0 1 1-2 0V4H4v5.5a1 1 0 1 1-2 0V4Zm1 9.5a1 1 0 0 1 1 1V20h16v-5.5a1 1 0 1 1 2 0V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.5a1 1 0 0 1 1-1Z" />
      <Path d="M9.293 16.207a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L13 15.914V18a1 1 0 1 1-2 0v-2.086l-.293.293a1 1 0 0 1-1.414 0ZM14.707 7.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293V6a1 1 0 1 1 2 0v2.086l.293-.293a1 1 0 0 1 1.414 0Z" />
      <Path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5a1 1 0 1 1-2 0V4H4v5.5a1 1 0 1 1-2 0V4Zm1 9.5a1 1 0 0 1 1 1V20h16v-5.5a1 1 0 1 1 2 0V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.5a1 1 0 0 1 1-1Z" />
    </G>
  </Svg>
);

export default CombineRowIcon;
