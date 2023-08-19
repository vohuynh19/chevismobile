import {useTheme} from '../../theme';

import {Gradient} from './Gradient';

export const BackgroundGradient = () => {
  const theme = useTheme();

  return <Gradient fromColor={theme.colors.neutral200} toColor="#E9E8F5" />;
};
