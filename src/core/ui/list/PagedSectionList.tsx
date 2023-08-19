import {useCallback, useRef} from 'react';
import {SectionList, SectionListProps} from 'react-native';

import {PagedListFooter} from './PagedListFooter';
import {RefreshControl} from './RefreshControl';

interface Props<Item> extends SectionListProps<Item> {
  onRefresh: () => Promise<any>;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

// https://stackoverflow.com/questions/53408470/flatlist-onendreached-being-called-multiple-times
export const PagedSectionList = <Item = any,>({
  onRefresh,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
  ...props
}: Props<Item>) => {
  const endReached = useRef(false);

  const onMomentumScrollEnd = useCallback(() => {
    if (endReached.current && hasNextPage) {
      fetchNextPage();
    }
    endReached.current = false;
  }, [fetchNextPage, hasNextPage]);

  const onEndReached = useCallback(() => {
    endReached.current = true;
  }, []);

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      onMomentumScrollEnd={onMomentumScrollEnd}
      refreshControl={<RefreshControl onRefresh={onRefresh} />}
      ListFooterComponent={<PagedListFooter isLoading={isFetchingNextPage} />}
      {...props}
    />
  );
};
