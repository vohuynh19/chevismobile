import Svg, {G, Path, SvgProps} from 'react-native-svg';

const PurchasesIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G>
      <Path d="M2.14 3a1 1 0 0 1 1-1h2.165a2 2 0 0 1 1.968 1.642L8.975 13h9.384l1.5-6H10.14a1 1 0 0 1 0-2h9.72a2 2 0 0 1 1.94 2.485l-1.5 6A2 2 0 0 1 18.36 15H8.974a2 2 0 0 1-1.968-1.642L5.305 4H3.14a1 1 0 0 1-1-1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20.14 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <Path d="M2.14 3a1 1 0 0 1 1-1h2.165a2 2 0 0 1 1.968 1.642L8.975 13h9.384l1.5-6H10.14a1 1 0 0 1 0-2h9.72a2 2 0 0 1 1.94 2.485l-1.5 6A2 2 0 0 1 18.36 15H8.974a2 2 0 0 1-1.968-1.642L5.305 4H3.14a1 1 0 0 1-1-1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20.14 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </G>
  </Svg>
);

export default PurchasesIcon;
