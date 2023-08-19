import Svg, {Path, SvgProps} from 'react-native-svg';

const NetworkIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-4-2a4 4 0 1 1 3.724 3.99l-1.55 4.652a4 4 0 1 1-5.62 1.326l-2.522-2.522a4.02 4.02 0 0 0 1.414-1.414l2.522 2.522a3.982 3.982 0 0 1 2.308-.545l1.55-4.65.1.062a4.021 4.021 0 0 1-1.284-1.247L9.99 9.724A4.01 4.01 0 0 0 10 10a4 4 0 1 1-.642-2.174l4.651-1.55A4.072 4.072 0 0 1 14 6ZM4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm8 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </Svg>
);

export default NetworkIcon;
