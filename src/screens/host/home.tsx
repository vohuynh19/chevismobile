import {useState} from 'react';
import {ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native';
import {BarChart, PieChart} from 'react-native-chart-kit';
import {colors, theme} from '~core/theme';
import {Divider, Icon, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {screenWidth} from '~core/utils';
import {useLogout} from '~modules/auth';
import {Demographic, ToppingName, useOrders} from '~modules/order';
import {HostScreenProps} from '~navigators/host';

const Home = ({navigation}: HostScreenProps<'/host/home'>) => {
  const [time, setTime] = useState<'all' | 'morning' | 'evening'>('all');

  const {orders, isLoading} = useOrders(
    time === 'all'
      ? 'ALL_DONE_TODAY'
      : time === 'morning'
      ? 'ALL_DONE_MORNING'
      : 'ALL_DONE_EVENING',
  );
  const {logout} = useLogout();

  //
  // Total receive &  Total revenue chart
  const total = (orders || []).reduce((prev, current) => {
    return (prev = prev + current.totalPrice);
  }, 0);

  // Maindish
  // Tan chay amount
  // Truyen thong amount
  const totalMainDishes: Record<string, number> = (orders || []).reduce(
    (prev, current) => {
      const singleData = current.dishes.reduce(
        (p, c) => {
          return {
            xet_truyen_thong_M:
              p.xet_truyen_thong_M +
              (c.size === 'M' && c.name === 'xet_truyen_thong' ? c.amount : 0),
            xet_truyen_thong_L:
              p.xet_truyen_thong_L +
              (c.size === 'L' && c.name === 'xet_truyen_thong' ? c.amount : 0),
            xet_tan_chay_M:
              p.xet_tan_chay_M +
              (c.size === 'M' && c.name === 'xet_tan_chay' ? c.amount : 0),
            xet_tan_chay_L:
              p.xet_tan_chay_L +
              (c.size === 'L' && c.name === 'xet_tan_chay' ? c.amount : 0),
          };
        },
        {
          xet_truyen_thong_M: 0,
          xet_truyen_thong_L: 0,
          xet_tan_chay_M: 0,
          xet_tan_chay_L: 0,
        },
      );
      return {
        xet_truyen_thong_M:
          prev.xet_truyen_thong_M + singleData.xet_truyen_thong_M,
        xet_truyen_thong_L:
          prev.xet_truyen_thong_L + singleData.xet_truyen_thong_L,
        xet_tan_chay_M: prev.xet_tan_chay_M + singleData.xet_tan_chay_M,
        xet_tan_chay_L: prev.xet_tan_chay_L + singleData.xet_tan_chay_L,
      };
    },
    {
      xet_truyen_thong_M: 0,
      xet_truyen_thong_L: 0,
      xet_tan_chay_M: 0,
      xet_tan_chay_L: 0,
    },
  );

  // Topping
  // Topping amount
  const totalTopping: Record<ToppingName, number> = (orders || []).reduce(
    (prev, current) => {
      const singleData = current.dishes.reduce(
        (p, c) => {
          if (c.toppings?.xa_lach) {
            // console.log('xalach', current);
          }

          return {
            xuc_xich: p.xuc_xich + (c.toppings?.xuc_xich || 0) * c.amount,
            pho_mai_lat:
              p.pho_mai_lat + (c.toppings?.pho_mai_lat || 0) * c.amount,
            pho_mai_soi:
              p.pho_mai_soi + (c.toppings?.pho_mai_soi || 0) * c.amount,
            xa_lach: p.xa_lach + (c.toppings?.xa_lach || 0) * c.amount,
            ga_popcorn: p.ga_popcorn + (c.toppings?.ga_popcorn || 0) * c.amount,
          };
        },
        {
          xuc_xich: 0,
          pho_mai_lat: 0,
          pho_mai_soi: 0,
          xa_lach: 0,
          ga_popcorn: 0,
        },
      );

      return {
        xuc_xich: prev.xuc_xich + singleData.xuc_xich,
        pho_mai_lat: prev.pho_mai_lat + singleData.pho_mai_lat,
        pho_mai_soi: prev.pho_mai_soi + singleData.pho_mai_soi,
        xa_lach: prev.xa_lach + singleData.xa_lach,
        ga_popcorn: prev.ga_popcorn + singleData.ga_popcorn,
      };
    },
    {
      xuc_xich: 0,
      pho_mai_lat: 0,
      pho_mai_soi: 0,
      xa_lach: 0,
      ga_popcorn: 0,
    },
  );

  const demographic: Record<Demographic, number> = (orders || []).reduce(
    (prev, cur) => {
      return {
        kid: prev.kid + (cur.demographics.kid ? 1 : 0),
        cap_1: prev.cap_1 + (cur.demographics.cap_1 ? 1 : 0),
        cap_2: prev.cap_2 + (cur.demographics.cap_2 ? 1 : 0),
        cap_3: prev.cap_3 + (cur.demographics.cap_3 ? 1 : 0),
        '20-30': prev['20-30'] + (cur.demographics['20-30'] ? 1 : 0),
        '>30': prev['>30'] + (cur.demographics['>30'] ? 1 : 0),
      };
    },
    {
      kid: 0,
      cap_1: 0,
      cap_2: 0,
      cap_3: 0,
      '20-30': 0,
      '>30': 0,
    },
  );

  const chartConfig = {
    backgroundColor: colors.primary600,
    backgroundGradientFrom: colors.primary600,
    backgroundGradientTo: colors.primary600,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <Screen topInset backgroundColor="white">
      <View
        paddingHorizontal={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <NavButton iconName="LogOut" onPress={() => logout()} />
        <View flexDirection="row" alignItems="center">
          <View mr={3}>
            <Icon
              name="ReviewDocument"
              onPress={() => navigation.navigate('/host/history')}
            />
          </View>
        </View>
      </View>

      <View paddingHorizontal={4} flexDirection="row">
        <TouchableOpacity
          onPress={() => setTime('all')}
          style={{
            paddingVertical: 4,
            flex: 1,
            alignItems: 'center',
            backgroundColor:
              time === 'all' ? theme.colors.neutralLavender300 : 'white',
          }}>
          <Text>Cả ngày</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTime('morning')}
          style={{
            paddingVertical: 4,
            flex: 1,
            alignItems: 'center',
            backgroundColor:
              time === 'morning' ? theme.colors.neutralLavender300 : 'white',
          }}>
          <Text>Ca Sáng</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTime('evening')}
          style={{
            paddingVertical: 4,
            flex: 1,
            alignItems: 'center',
            backgroundColor:
              time === 'evening' ? theme.colors.neutralLavender300 : 'white',
          }}>
          <Text>Ca Tối</Text>
        </TouchableOpacity>
      </View>

      {isLoading && <ActivityIndicator size="large" />}

      <Divider />

      <View flex={1}>
        <ScrollView
          style={{
            paddingHorizontal: 16,
          }}>
          <View flexDirection="row" justifyContent="space-between">
            <View flex={1}>
              <Text fontWeight="700">Doanh thu:</Text>
              <Text>{total}k</Text>
            </View>

            <View flex={1}>
              <Text fontWeight="700">Số phần:</Text>
              <Text>
                {totalMainDishes.xet_truyen_thong_M +
                  totalMainDishes.xet_truyen_thong_L +
                  totalMainDishes.xet_tan_chay_M +
                  totalMainDishes.xet_tan_chay_L}
              </Text>
            </View>
          </View>
          <Divider />

          <Text fontWeight="700" mb={4}>
            Doanh số món chính:
          </Text>

          <BarChart
            showValuesOnTopOfBars
            fromZero
            data={{
              labels: ['TT | M', 'TT | L', 'TC | M', 'TC | L'],
              datasets: [
                {
                  data: [
                    totalMainDishes.xet_truyen_thong_M,
                    totalMainDishes.xet_truyen_thong_L,
                    totalMainDishes.xet_tan_chay_M,
                    totalMainDishes.xet_tan_chay_L,
                  ],
                },
              ],
            }}
            width={screenWidth - 16 * 2}
            height={320}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            yAxisLabel=""
            yAxisSuffix=" phần"
            style={{
              borderRadius: 8,
            }}
          />

          <Divider />

          <Text fontWeight="700" mb={4}>
            Doanh số topping:
          </Text>

          <BarChart
            showValuesOnTopOfBars
            fromZero
            data={{
              labels: ['Xúc xích', 'Gà viên', 'PM lát', 'PM sợi', 'Xà lách'],
              datasets: [
                {
                  data: [
                    totalTopping.xuc_xich,
                    totalTopping.ga_popcorn,
                    totalTopping.pho_mai_lat,
                    totalTopping.pho_mai_soi,
                    totalTopping.xa_lach,
                  ],
                },
              ],
            }}
            width={screenWidth - 16 * 2}
            height={320}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            yAxisLabel=""
            yAxisSuffix=" phần"
            style={{
              borderRadius: 8,
            }}
          />

          <Divider />

          <Text fontWeight="700" mb={4}>
            Nhân khẩu học
          </Text>

          <PieChart
            data={[
              {
                name: 'Trẻ em',
                value: demographic.kid,
                color: colors.warning300,
                legendFontColor: colors.primary900,
                legendFontSize: 15,
              },
              {
                name: 'Cấp 1',
                value: demographic.cap_1,
                color: colors.primary400,
                legendFontColor: colors.primary900,
                legendFontSize: 15,
              },
              {
                name: 'Cấp 2',
                value: demographic.cap_2,
                color: colors.error600,
                legendFontColor: colors.primary900,
                legendFontSize: 15,
              },
              {
                name: 'Cấp 3',
                value: demographic.cap_3,
                color: colors.primary900,
                legendFontColor: colors.primary900,
                legendFontSize: 15,
              },
              {
                name: '20-30',
                value: demographic['20-30'],
                color: colors.success600,
                legendFontColor: colors.primary900,
                legendFontSize: 15,
              },
              {
                name: '>30',
                value: demographic['>30'],
                color: colors.secondary400,
                legendFontColor: colors.primary900,
                legendFontSize: 15,
              },
            ]}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={'value'}
            backgroundColor={'transparent'}
            center={[10, 10]}
            paddingLeft="0"
          />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default Home;
