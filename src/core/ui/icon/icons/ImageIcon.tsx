import Svg, {G, Path, SvgProps} from 'react-native-svg';

const ImageIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm18 0H4v12h16V6ZM9.962 8a1 1 0 0 1 .896.486l2.34 3.901 1.095-1.094a1 1 0 0 1 1.488.082l2 2.5a1 1 0 1 1-1.562 1.25l-1.302-1.628-1.21 1.21a1 1 0 0 1-1.565-.193l-2.062-3.437-2.186 4.37a1 1 0 1 1-1.788-.894l3-6A1 1 0 0 1 9.962 8ZM17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <Path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm18 0H4v12h16V6ZM9.962 8a1 1 0 0 1 .896.486l2.34 3.901 1.095-1.094a1 1 0 0 1 1.488.082l2 2.5a1 1 0 1 1-1.562 1.25l-1.302-1.628-1.21 1.21a1 1 0 0 1-1.565-.193l-2.062-3.437-2.186 4.37a1 1 0 1 1-1.788-.894l3-6A1 1 0 0 1 9.962 8ZM17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </G>
  </Svg>
);

export default ImageIcon;
