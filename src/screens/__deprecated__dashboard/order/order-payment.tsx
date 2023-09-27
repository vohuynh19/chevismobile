// import {useState} from 'react';
// import {ScrollView} from 'react-native';
// import {Button, CheckBox, Divider, Input, Screen, Text, View} from '~core/ui';
// import {NavButton} from '~core/ui/navigation/NavButton';
// import {
//   MainDish,
//   defaultDemographics,
//   demographics,
//   getDemographicName,
//   getDishTotalPrice,
//   getDishUnitPrice,
//   getMainDishName,
//   getTopping,
// } from '~modules/order';
// import {OrderScreenProps} from '~navigators/types';

// const OrderPaymentScreen = ({
//   navigation,
//   route,
// }: OrderScreenProps<'/dashboard/order/order-payment'>) => {
//   const {params} = route;
//   const {dishes} = params;

//   const [demographicState, setDemographicState] = useState(defaultDemographics);
//   const [receivedAmount, setReceivedAmount] = useState<string>();

//   const dishesTotalPrice = dishes.reduce(
//     (prev, current) => prev + getDishTotalPrice(current),
//     0,
//   );

//   return (
//     <Screen topInset>
//       <View paddingHorizontal={4}>
//         <NavButton iconName="ArrowLeft" />
//       </View>

//       <View flexDirection="row" paddingHorizontal={4}>
//         <View flex={1}>
//           <Text>Tên món</Text>
//         </View>

//         <View width={64}>
//           <Text textAlign={'center'}>SL</Text>
//         </View>

//         <View width={64}>
//           <Text textAlign={'center'}>Giá</Text>
//         </View>

//         <View width={80}>
//           <Text textAlign={'center'}>Thành tiền</Text>
//         </View>
//       </View>

//       <Divider backgroundColor={'neutral500'} />

//       <View flex={1}>
//         <ScrollView>
//           {dishes.map(dish => (
//             <View key={JSON.stringify(dish)} paddingHorizontal={4}>
//               <InvoiceDishItem dish={dish} />
//               <Divider backgroundColor={'neutral500'} width={'100%'} ml={0} />
//             </View>
//           ))}
//         </ScrollView>
//       </View>

//       <Divider backgroundColor={'neutral500'} />

//       <View flexDirection="row" paddingHorizontal={4}>
//         <View flex={1}>
//           <Text>Tổng</Text>
//         </View>

//         <View width={80}>
//           <Text textAlign={'center'}>{dishesTotalPrice}k</Text>
//         </View>
//       </View>

//       <View
//         flexDirection="row"
//         paddingHorizontal={4}
//         alignItems="center"
//         mt={2}>
//         <View flex={1}>
//           <Text>Nhận</Text>
//         </View>

//         <View width={80}>
//           <Input
//             defaultValue={'0'}
//             value={receivedAmount}
//             onChangeText={text => setReceivedAmount(text)}
//             keyboardType="number-pad"
//           />
//         </View>
//       </View>

//       <View flexDirection="row" paddingHorizontal={4} mt={4}>
//         <View flex={1}>
//           <Text>Thối</Text>
//         </View>

//         <View width={80}>
//           <Text textAlign={'center'}>
//             {(Number(receivedAmount) || 0) - dishesTotalPrice}k
//           </Text>
//         </View>
//       </View>

//       <Divider backgroundColor={'neutral500'} />

//       <View paddingHorizontal={4} flexDirection={'row'} flexWrap="wrap">
//         {demographics.map(demographic => (
//           <View key={demographic} width={'50%'} mb={2}>
//             <CheckBox
//               checked={demographicState[demographic]}
//               onChange={() =>
//                 setDemographicState(prev => ({
//                   ...prev,
//                   [demographic]: !demographicState[demographic],
//                 }))
//               }
//               title={getDemographicName(demographic)}
//             />
//           </View>
//         ))}
//       </View>

//       <Divider backgroundColor={'neutral500'} />

//       <View paddingHorizontal={4}>
//         <Button title="Xác nhận hoá đơn" />
//       </View>
//     </Screen>
//   );
// };

// const InvoiceDishItem = ({dish}: {dish: MainDish}) => {
//   return (
//     <View flex={1} flexDirection="row" alignItems="center">
//       <View flex={1}>
//         <Text lineHeight={14} fontSize={12}>{`${getMainDishName(
//           dish.name,
//         )}${getTopping(dish)}`}</Text>
//       </View>

//       <View width={64}>
//         <Text lineHeight={14} fontSize={14} textAlign={'center'}>
//           {dish.amount}
//         </Text>
//       </View>

//       <View width={64}>
//         <Text lineHeight={14} fontSize={14} textAlign={'center'}>
//           {getDishUnitPrice(dish)}k
//         </Text>
//       </View>

//       <View width={80}>
//         <Text lineHeight={14} fontSize={14} textAlign={'center'}>
//           {getDishTotalPrice(dish)}k
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default OrderPaymentScreen;
