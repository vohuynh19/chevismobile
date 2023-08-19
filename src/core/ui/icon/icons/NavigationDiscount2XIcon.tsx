import Svg, {G, Path, SvgProps} from 'react-native-svg';

const NavigationDiscount2XIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.543 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM18.044 21a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
      <Path d="M23.044 9.081a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.043 15.081a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2h-11Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.59 3.168a3 3 0 0 1 2.451.86l4.03 4.03a3 3 0 0 1 .86 2.454l-.67 5.984a3 3 0 0 1-.86 1.788l-9.845 9.845a3 3 0 0 1-4.243 0l-9.434-9.435a3 3 0 0 1-.013-4.23l9.613-9.727a3 3 0 0 1 1.805-.873l6.306-.696Zm1.037 2.274a1 1 0 0 0-.817-.286l-6.307.696a1 1 0 0 0-.601.291L5.289 15.87a1 1 0 0 0 .004 1.41l9.434 9.434a1 1 0 0 0 1.415 0l9.844-9.844a1 1 0 0 0 .287-.596l.67-5.984a1 1 0 0 0-.287-.818l-4.03-4.03Z"
      />
    </G>
  </Svg>
);

export default NavigationDiscount2XIcon;
