import Svg, {G, Path, SvgProps} from 'react-native-svg';

const DiscountIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM8.5 10a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM15 13.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-.5 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
      />
      <Path d="M7.293 17.748a1 1 0 0 1 0-1.414l8-8a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8.765v11.276a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.765a2 2 0 0 0-.464-1.28L16.6 2.76a2 2 0 0 0-1.537-.72H8.937a2 2 0 0 0-1.537.72L3.464 7.485A2 2 0 0 0 3 8.765Zm2 11.276V8.765l3.937-4.724h6.126L19 8.765v11.276H5Z"
      />
    </G>
  </Svg>
);

export default DiscountIcon;
