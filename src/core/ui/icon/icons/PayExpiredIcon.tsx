import Svg, {G, Path, SvgProps} from 'react-native-svg';

const PayExpiredIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5h-2V6H4v11h6a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      />
      <Path d="M4 8h16v3H4V8Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5h-2V6H4v11h6a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      />
      <Path d="M4 8h16v3H4V8Z" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.502 20.863a.879.879 0 0 0 .487.137h8c.183 0 .35-.046.5-.137a1.2 1.2 0 0 0 .375-.362c.083-.15.13-.315.138-.498a.81.81 0 0 0-.138-.499l-4-6.98a.925.925 0 0 0-.85-.524.942.942 0 0 0-.512.15c-.159.1-.288.224-.388.373l-4 6.981a1.019 1.019 0 0 0-.113.51c.009.176.055.338.138.487.1.15.221.27.363.362Zm4.837-1.01a.48.48 0 0 1-.7 0 .478.478 0 0 1 0-.698.48.48 0 0 1 .7 0 .478.478 0 0 1 0 .698Zm.15-1.845h-1V14.02h1v3.99Z"
    />
  </Svg>
);

export default PayExpiredIcon;
