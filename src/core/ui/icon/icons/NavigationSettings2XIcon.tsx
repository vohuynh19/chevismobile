import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationSettings2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path d="M16 29c-1.55 0-2.84-1.01-3.2-2.52-.05-.2-.14-.38-.28-.54-.13-.16-.3-.28-.49-.35-.19-.08-.4-.11-.6-.1-.2.02-.4.08-.58.19-1.32.8-2.95.61-4.05-.49-1.1-1.1-1.29-2.72-.49-4.05a1.308 1.308 0 0 0 .1-1.17c-.08-.19-.2-.36-.36-.49a1.33 1.33 0 0 0-.54-.28C4.01 18.84 3 17.55 3 16c0-1.55 1.01-2.84 2.52-3.21.2-.05.38-.14.54-.28.15-.13.28-.3.35-.49.08-.19.11-.39.09-.6-.02-.2-.08-.4-.19-.58-.81-1.32-.61-2.95.48-4.05 1.1-1.1 2.72-1.29 4.05-.49.36.22.79.25 1.17.09.39-.16.66-.49.76-.89C13.16 4.01 14.45 3 16 3s2.84 1.01 3.21 2.52c.05.2.14.38.28.54.14.16.3.28.49.36.19.08.39.11.6.09.2-.02.4-.08.58-.19 1.33-.81 2.95-.61 4.05.48 1.1 1.1 1.29 2.72.49 4.05a1.285 1.285 0 0 0-.09 1.18c.08.19.2.36.35.49.16.13.34.23.54.28 1.51.37 2.52 1.65 2.52 3.2 0 1.55-1.01 2.84-2.52 3.21-.2.05-.38.14-.54.27-.16.13-.28.3-.36.49-.08.19-.11.4-.1.6.02.2.08.4.19.58.81 1.32.61 2.95-.48 4.05a3.259 3.259 0 0 1-4.05.49 1.285 1.285 0 0 0-1.18-.09c-.19.08-.35.2-.49.35-.14.15-.23.34-.28.54-.37 1.51-1.65 2.52-3.21 2.52V29Zm-4.47-5.51a3.28 3.28 0 0 1 2.51 1.15c.34.39.58.87.7 1.37.18.73.77.99 1.26.99s1.08-.26 1.26-.99c.12-.5.36-.97.7-1.37a3.28 3.28 0 0 1 2.75-1.14c.52.04 1.02.2 1.46.47.64.39 1.25.16 1.59-.19.35-.35.58-.95.19-1.59a3.307 3.307 0 0 1 .67-4.22c.39-.34.86-.58 1.37-.7.73-.18.99-.77.99-1.26s-.26-1.08-.99-1.26c-.5-.12-.98-.36-1.37-.7a3.28 3.28 0 0 1-1.14-2.76c.04-.52.2-1.02.47-1.46.39-.64.16-1.24-.19-1.59-.35-.35-.95-.58-1.59-.19a3.307 3.307 0 0 1-4.22-.67c-.34-.39-.58-.87-.7-1.37-.18-.73-.77-.99-1.26-.99s-1.08.26-1.26.99a3.263 3.263 0 0 1-1.94 2.27c-.98.41-2.07.32-2.98-.23-.64-.39-1.25-.16-1.6.19-.35.35-.58.95-.19 1.59a3.307 3.307 0 0 1-.67 4.22c-.4.34-.87.58-1.37.7-.73.18-.99.77-.99 1.26s.26 1.08.99 1.26c.5.12.97.36 1.37.7a3.29 3.29 0 0 1 1.14 2.76c-.04.52-.2 1.02-.47 1.46-.39.64-.16 1.25.19 1.59.35.35.95.58 1.59.19.44-.27.95-.43 1.46-.47h.25l.02-.01Z" />
      <Path d="M16 21c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Z" />
    </G>
  </Svg>
);

export default NavigationSettings2XIcon;