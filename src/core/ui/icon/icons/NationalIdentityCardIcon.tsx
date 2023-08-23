import Svg, {Path, SvgProps} from 'react-native-svg';

const NationalIdentityCardIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 6C0 4.34315 1.34315 3 3 3H5H9H15H19H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34315 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5H19H15H9H5H3ZM12 10C12 9.44772 12.4477 9 13 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H13C12.4477 11 12 10.5523 12 10ZM12 14C12 13.4477 12.4477 13 13 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H13C12.4477 15 12 14.5523 12 14ZM6.76186 12.0708C5.75385 12.368 5 13.5665 5 15H11C11 13.5665 10.2461 12.368 9.23814 12.0708C9.70216 11.7045 10 11.137 10 10.5C10 9.39543 9.10457 8.5 8 8.5C6.89543 8.5 6 9.39543 6 10.5C6 11.137 6.29784 11.7045 6.76186 12.0708Z"
    />
  </Svg>
);

export default NationalIdentityCardIcon;