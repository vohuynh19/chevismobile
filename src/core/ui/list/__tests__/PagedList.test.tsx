import {useState} from 'react';

import {Text} from 'common/components/Text';
import {act, fireEvent, render, renderHook, screen} from 'testUtils';

import {PagedList} from '../PagedList';

const list = () => {
  const data = [];
  for (let i = 1; i < 20; i++) {
    data.push({id: i, name: `Item ${i}`});
  }
  return data;
};

function useDataPagedList() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const onUpdateData = () => {
    setData(prev => prev.concat([6, 7, 8, 9, 10]));
  };
  return {data, onUpdateData};
}

describe('PagedList', () => {
  test('should render the correct list data and the first item passed to ‘data’ is visible on the screen', () => {
    const onRefresh = jest.fn();
    const fetchNextPage = jest.fn();

    // default Flatlist render 10 items first
    render(
      <PagedList
        testID="my-PagedList"
        data={list()}
        onEndReached={() => {}}
        renderItem={({item}) => <Text>{item.name}</Text>}
        onRefresh={onRefresh}
        fetchNextPage={fetchNextPage}
        hasNextPage
        isFetchingNextPage
      />,
      {withSnapshot: true},
    );

    const pagedList = screen.getByTestId('my-PagedList');
    expect(pagedList.props.data).toEqual(list());
    const firstItem = screen.getByText('Item 1');
    expect(firstItem).toBeVisible();
  });

  test('should not render items when items are not visible in the screen', () => {
    const onRefresh = jest.fn();
    const fetchNextPage = jest.fn();

    // default Flatlist render 10 items first
    render(
      <PagedList
        testID="my-PagedList"
        data={list()}
        onEndReached={() => {}}
        renderItem={({item}) => <Text>{item.name}</Text>}
        onRefresh={onRefresh}
        fetchNextPage={fetchNextPage}
        hasNextPage
        isFetchingNextPage
      />,
      {withSnapshot: true},
    );

    // Verify that items are not visible
    const lastItem = screen.queryByText('Item 19');
    expect(lastItem).toBeNull();
  });

  test('Should calls handleRefresh on refresh', () => {
    const onRefresh = jest.fn();
    const fetchNextPage = jest.fn();

    render(
      <PagedList
        testID="my-PagedList"
        data={list()}
        onEndReached={() => {}}
        renderItem={({item}) => <Text>{item.name}</Text>}
        onRefresh={onRefresh}
        fetchNextPage={fetchNextPage}
        hasNextPage
        isFetchingNextPage
      />,
      {withSnapshot: true},
    );

    const flatList = screen.getByTestId('my-PagedList');
    fireEvent(flatList, 'onRefresh');
    expect(onRefresh).toHaveBeenCalled();
    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  test('should verify user behave scroll to bottom, after the user has stopped scrolling the list with their finger will trigger onMomentumScrollEnd and after that will be trigger fetchNextPageMock ', () => {
    const fetchNextPageMock = jest.fn();
    const onRefresh = jest.fn();

    render(
      <PagedList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onRefresh={onRefresh}
        fetchNextPage={fetchNextPageMock}
        hasNextPage
        isFetchingNextPage
        testID="page-list"
        renderItem={({item}) => {
          return <Text>{item}</Text>;
        }}
      />,
      {withSnapshot: true},
    );
    const eventData = {
      nativeEvent: {
        contentOffset: {y: 1, x: 0},
        contentSize: {height: 1, width: 100},
        layoutMeasurement: {height: 100, width: 100}, // Dimensions of the device
      },
    };

    const flatList = screen.getByTestId('page-list');
    fireEvent.scroll(flatList, eventData);

    fireEvent(flatList, 'onMomentumScrollEnd');
    // when onMomentumScrollEnd have been call it will trigger fetchNextPageMock
    expect(fetchNextPageMock).toHaveBeenCalledTimes(1);
  });

  test('should Verify after user behave scroll to bottom trigger fetchNextPageMock, add new items to Pagedlist and verify items now are visible on the screen', async () => {
    const {result} = renderHook(() => useDataPagedList());
    const onRefresh = jest.fn();

    const fetchNextPageMock = jest.fn(() => {
      act(() => {
        result.current.onUpdateData();
      });
    });

    const {rerender} = await render(
      <PagedList
        data={result.current.data}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onRefresh={onRefresh}
        fetchNextPage={fetchNextPageMock}
        hasNextPage
        isFetchingNextPage
        testID="page-list"
        renderItem={({item}) => {
          return <Text>{item}</Text>;
        }}
      />,
      {withSnapshot: true},
    );
    const eventData = {
      nativeEvent: {
        contentOffset: {y: 1, x: 0},
        contentSize: {height: 1, width: 100},
        layoutMeasurement: {height: 100, width: 100}, // Dimensions of the device
      },
    };

    const pagedList = screen.getByTestId('page-list');
    expect(pagedList.props.data).toEqual(result.current.data);
    // current data have 5 item
    const firstItem = screen.getByText('1');
    expect(firstItem).toBeVisible();
    // trigger event scroll and fetchNextPageMock to add new item
    const flatList = screen.getByTestId('page-list');
    fireEvent.scroll(flatList, eventData);

    fireEvent(flatList, 'onMomentumScrollEnd');
    rerender(
      <PagedList
        data={result.current.data}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onRefresh={onRefresh}
        fetchNextPage={fetchNextPageMock}
        hasNextPage
        isFetchingNextPage
        testID="page-list"
        renderItem={({item}) => {
          return <Text>{item}</Text>;
        }}
      />,
    );
    // rerender add check new Item visible in screen
    expect(fetchNextPageMock).toHaveBeenCalledTimes(1);
    const lastItem = screen.getByText('9');
    expect(lastItem).toBeVisible();
  });
});
