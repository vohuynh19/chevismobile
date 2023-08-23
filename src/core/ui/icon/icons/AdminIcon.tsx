import Svg, {G, Path, SvgProps} from 'react-native-svg';

const AdminIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path d="M12.02 4.615a.043.043 0 0 0-.04 0C9.274 6.129 6.332 7.247 5.012 7.718c.194 2.187 1.26 8.36 6.987 11.663 5.727-3.302 6.793-9.476 6.987-11.663-1.32-.47-4.262-1.59-6.966-3.103ZM11 2.861a2.05 2.05 0 0 1 2 0c2.573 1.44 5.408 2.518 6.681 2.971.789.282 1.39 1.053 1.312 1.992-.192 2.288-1.313 9.473-8.029 13.32a1.944 1.944 0 0 1-1.928 0c-6.716-3.847-7.837-11.032-8.03-13.32-.078-.94.524-1.71 1.313-1.992 1.273-.453 4.108-1.531 6.68-2.971Z" />
      <Path d="M16.898 14.443a4.573 4.573 0 0 0-.963-1.216 5.135 5.135 0 0 0-.388-.318 5.822 5.822 0 0 0-1.367-.747h-.002a3.2 3.2 0 0 0 1.017-2.344 3.203 3.203 0 0 0-3.202-3.204A3.203 3.203 0 0 0 9.81 12.16a5.858 5.858 0 0 0-1.37.748c-.133.1-.263.205-.388.318a4.584 4.584 0 0 0-.956 1.204c.413.722.907 1.44 1.497 2.128.007-.047.01-.094.01-.142 0-.433.12-.826.343-1.172a2.49 2.49 0 0 1 .28-.357 3.043 3.043 0 0 1 .51-.436 4.117 4.117 0 0 1 2.258-.696c.808 0 1.695.276 2.359.768.081.06.158.123.231.188.17.152.316.318.435.496.237.355.367.76.367 1.21 0 .052.004.104.011.154a13.819 13.819 0 0 0 1.502-2.129ZM10.8 9.818a1.194 1.194 0 1 1 2.388 0 1.194 1.194 0 0 1-2.389 0Z" />
    </G>
  </Svg>
);

export default AdminIcon;