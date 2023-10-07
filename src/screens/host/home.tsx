import {Divider, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {useLogout} from '~modules/auth';
import {Demographic, ToppingName, useOrders} from '~modules/order';

const Home = () => {
  const {orders} = useOrders('ALL_DONE_TODAY');
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

  return (
    <Screen topInset backgroundColor="white">
      <View
        paddingHorizontal={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <NavButton iconName="LogOut" onPress={() => logout()} />
      </View>

      <View flex={1} paddingHorizontal={4}>
        <Divider />

        <Text fontWeight="700">Doanh số món chính:</Text>
        <Text>
          XET. truyền thống size M: {totalMainDishes.xet_truyen_thong_M}
        </Text>
        <Text>
          XET. truyền thống size L: {totalMainDishes.xet_truyen_thong_L}
        </Text>
        <Text>XET. tan chảy size M: {totalMainDishes.xet_tan_chay_M}</Text>
        <Text>XET. tan chảy size L: {totalMainDishes.xet_tan_chay_L}</Text>

        <Divider />

        <Text fontWeight="700">Doanh số topping:</Text>
        <Text>Xúc xích: {totalTopping.xuc_xich}</Text>
        <Text>Gà viên popcorn: {totalTopping.ga_popcorn}</Text>
        <Text>Phô mai lát: {totalTopping.pho_mai_lat}</Text>
        <Text>Phô mai sợi: {totalTopping.pho_mai_soi}</Text>
        <Text>Xà lách: {totalTopping.xa_lach}</Text>

        <Divider />

        <Text fontWeight="700">Doanh thu:</Text>
        <Text>{total}k</Text>

        <Divider />

        <Text fontWeight="700">Nhân khẩu học</Text>
        <Text>Trẻ em: {demographic.kid} người</Text>
        <Text>Cấp 1: {demographic.cap_1} người</Text>
        <Text>Cấp 2: {demographic.cap_2} người</Text>
        <Text>Cấp 3: {demographic.cap_3} người</Text>
        <Text>Từ 20 đến 30: {demographic['20-30']} người</Text>
        <Text>Trên 30: {demographic['>30']} người</Text>
      </View>
    </Screen>
  );
};

export default Home;
