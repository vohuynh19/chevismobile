import Svg, {Path, SvgProps} from 'react-native-svg';

const CompanyIcon = ({
  size = 24,
  ...props
}: SvgProps & {
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 3.041a1.5 1.5 0 0 0-1.5 1.5v15.5H3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-1.75v-15.5a1.5 1.5 0 0 0-1.5-1.5H6.25Zm11 17v-15H6.75v15h6v-4.8c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v4.8h1.5Zm-8.8-14a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h2.6a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2h-2.6Zm-.2 4.659c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2h-2.6a.2.2 0 0 1-.2-.2v-2.6Zm.2 4.341a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h2.6a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2h-2.6Zm4.5-9a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h2.6a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2h-2.6Zm-.2 4.659c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2h-2.6a.2.2 0 0 1-.2-.2v-2.6Z"
    />
  </Svg>
);

export default CompanyIcon;
