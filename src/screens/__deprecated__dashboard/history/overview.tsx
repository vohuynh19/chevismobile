import {useEffect} from 'react';
import {Screen, Text, View} from '~core/ui';

const HistoryOverviewScreen = () => {
  useEffect(() => {}, []);

  return (
    <Screen topInset>
      <View flex={1}>
        <Text
          paddingHorizontal={4}
          marginVertical={4}
          lineHeight={36}
          fontSize={36}>
          Hoá đơn hiện tại
        </Text>
      </View>
    </Screen>
  );
};

export default HistoryOverviewScreen;
