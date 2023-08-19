import {useCallback, useState} from 'react';
import {RefreshControl as RNRefreshControl} from 'react-native';

import {useTheme} from '../../theme';

interface Props<T> {
  onRefresh: () => Promise<T>;
  progressViewOffset?: number;
}

export const RefreshControl = <T,>({
  onRefresh,
  progressViewOffset,
  ...rest
}: Props<T>) => {
  const theme = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshWrapped = useCallback(() => {
    setRefreshing(true);
    onRefresh().finally(() => {
      setRefreshing(false);
    });
  }, [onRefresh]);

  return (
    <RNRefreshControl
      refreshing={refreshing}
      onRefresh={onRefreshWrapped}
      tintColor={theme.colors.primary800}
      colors={[theme.colors.primary800]}
      progressBackgroundColor={theme.colors.neutral200}
      progressViewOffset={progressViewOffset}
      {...rest}
    />
  );
};
