import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationTumbsUp2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M6 14H5v10h1V14Zm-1-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H5ZM17.316 3.856a2 2 0 0 1 2.356-.412l.541.273a2 2 0 0 1 1.058 2.187L20.226 11h5.648c2.19 0 3.642 2.27 2.724 4.257l-4.422 9.581A2 2 0 0 1 22.36 26H12a2 2 0 0 1-2-2V12.398a2 2 0 0 1 .546-1.374l6.77-7.168Zm1.995 1.646-.54-.273L12 12.398V24h10.36l4.422-9.58a1 1 0 0 0-.908-1.42h-8.1l1.537-7.498Z" />
    </G>
  </Svg>
);

export default NavigationTumbsUp2XIcon;
