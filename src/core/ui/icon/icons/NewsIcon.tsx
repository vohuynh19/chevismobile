import Svg, {Path, SvgProps} from 'react-native-svg';

const NewsIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.65 5.042a1.005 1.005 0 0 1-.096-1.414l1.163-1.354a.995.995 0 0 1 1.407-.111c.415.36.459.993.097 1.414L18.057 4.93a.995.995 0 0 1-1.407.11Zm-.515 10.802c-.827-.287-1.785-.595-2.54-.775-.53-.126-.961-.188-1.177-.133l-.009.002-4.151 1.138a4.926 4.926 0 0 1-6.08-3.51 5.06 5.06 0 0 1 3.549-6.15L9.878 5.28c.512-.14 1.797-1.54 2.784-2.69.537-.624 1.562-.408 1.77.385l3.048 11.632c.208.793-.574 1.504-1.345 1.238ZM4.106 12.037a2.953 2.953 0 0 0 3.636 2.107l-1.518-5.79a3.033 3.033 0 0 0-2.118 3.683Zm4.047-4.212 1.517 5.79 2.232-.611c.575-.158 1.16-.076 1.424-.035.361.055.755.146 1.132.246.207.054.42.115.637.179L12.96 5.243c-.156.166-.311.328-.464.481-.278.28-.574.56-.86.792-.193.157-.606.485-1.121.658v.004l-2.36.647Zm12.527-.328a1.014 1.014 0 0 1-.712 1.232l-1.377.377a.987.987 0 0 1-1.218-.703 1.014 1.014 0 0 1 .711-1.231l1.378-.378a.987.987 0 0 1 1.218.703Zm-1.683 5.458a.995.995 0 0 1-.607-1.273 1.005 1.005 0 0 1 1.273-.624l1.67.578c.519.18.79.75.607 1.274a1.005 1.005 0 0 1-1.273.623l-1.67-.578ZM7.03 17.965l.569 2.17a2.416 2.416 0 0 0 2.982 1.722 2.482 2.482 0 0 0 1.74-3.015l-.568-2.17-1.929.528.569 2.17a.454.454 0 0 1-.32.552.442.442 0 0 1-.545-.315l-.569-2.17-1.929.529Z"
    />
  </Svg>
);

export default NewsIcon;
