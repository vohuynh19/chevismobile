import React from 'react';
import {useLogout} from '~core/react-query';
import {LineChart} from 'react-native-chart-kit';

import {Icon, Screen, Text, View} from '~core/ui';
import {screenWidth} from '~core/utils';
import {colors} from '~core/theme';

const HomeStatisticItem = (props: {
  label: string;
  value: string;
  position: 'left' | 'right';
}) => {
  return (
    <View
      borderRadius={'xl'}
      flex={1}
      padding={2}
      backgroundColor="primary200"
      alignItems="center"
      justifyContent="center"
      marginRight={props.position === 'left' ? 2 : 0}
      marginLeft={props.position === 'right' ? 2 : 0}>
      <Text lineHeight={36} fontSize={36}>
        {props.value}
      </Text>
      <Text>{props.label}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const {logout} = useLogout();

  return (
    <Screen paddingHorizontal={4} topInset backgroundColor="secondary100">
      <View alignItems="flex-end" padding={2}>
        <Icon size={28} name="LogOut" onPress={() => logout()} />
      </View>

      <View marginBottom={4}>
        <LineChart
          bezier
          width={screenWidth - 32}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          chartConfig={{
            backgroundColor: colors.primary600,
            backgroundGradientFrom: colors.primary600,
            backgroundGradientTo: colors.primary600,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <View height={200}>
        <View flex={1} flexDirection="row" marginBottom={4}>
          <HomeStatisticItem
            position="left"
            label="Doanh thu hôm nay"
            value="1,000,000"
          />
          <HomeStatisticItem
            position="right"
            label="Topping xúc xích"
            value="10"
          />
        </View>

        <View flex={1} flexDirection="row">
          <HomeStatisticItem position="left" label="XET. phô mai" value="10" />
          <HomeStatisticItem
            position="right"
            label="XET. truyền thống"
            value="10"
          />
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;
