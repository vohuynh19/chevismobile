import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BurundiIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <G fill="#D80027">
        <Path d="M38.613 4.96c-8.592-6.612-20.634-6.612-29.226 0L24 19.572 38.613 4.96ZM24 28.427 9.387 43.041c8.592 6.611 20.634 6.611 29.226 0L24 28.427Z" />
      </G>
      <G fill="#6DA544">
        <Path d="M19.573 24 4.959 9.387c-6.611 8.592-6.611 20.634 0 29.226L19.573 24ZM28.427 24 43.04 38.613c6.612-8.592 6.612-20.634 0-29.226L28.427 24Z" />
      </G>
      <Path
        d="M24 34.435c5.763 0 10.435-4.672 10.435-10.435 0-5.763-4.672-10.435-10.435-10.435-5.763 0-10.435 4.672-10.435 10.435 0 5.763 4.672 10.435 10.435 10.435Z"
        fill="#F0F0F0"
      />
      <G fill="#D80027">
        <Path d="m24 16.696.904 1.565h1.807l-.904 1.565.904 1.565h-1.807L24 22.957l-.904-1.566H21.29l.904-1.565-.904-1.565h1.807L24 16.696ZM19.407 24l.904 1.565h1.807l-.904 1.565.904 1.566H20.31l-.904 1.565-.904-1.565h-1.807l.903-1.566-.903-1.565h1.807L19.407 24ZM28.593 24l.904 1.565h1.807l-.903 1.565.903 1.566h-1.807l-.904 1.565-.903-1.565h-1.808l.904-1.566-.904-1.565h1.808L28.593 24Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BurundiIcon;