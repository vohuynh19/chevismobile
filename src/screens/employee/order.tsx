import {useMemo, useRef, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Modalize} from 'react-native-modalize';

import {EmployeeScreenProps} from '~navigators/employee';
import {colors} from '~core/theme';
import {Screen, View, Text, Divider, Button, CheckBox, Icon} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {screenWidth, showErrorMessage, showSuccessMessage} from '~core/utils';
import {
  MainDish,
  defaultDemographics,
  demographics,
  getDemographicName,
  getDishNameInInvoice,
  getDishTotalPrice,
  getDishUnitPrice,
  useCreateOrder,
} from '~modules/order';
import {PaymentMethod, paymentImages, paymentMethods} from '~modules/payment';

const Order = ({navigation, route}: EmployeeScreenProps<'/employee/order'>) => {
  const {params} = route;
  const {dishes} = params;
  const modalizeRef = useRef<Modalize>(null);
  const {createOrder, isLoading} = useCreateOrder();

  const [demographicState, setDemographicState] = useState(defaultDemographics);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');

  const dishesTotalPrice = useMemo(() => {
    return dishes.reduce(
      (prev, current) => prev + getDishTotalPrice(current),
      0,
    );
  }, [dishes]);

  const onConfirm = async () => {
    try {
      const data = await createOrder({
        dishes,
        paymentMethod,
        status: 'CREATED',
        demographics: demographicState,
        totalPrice: dishesTotalPrice,
      });

      showSuccessMessage(`Tạo đơn hàng thành công: ${data.id}`);

      switch (paymentMethod) {
        case 'banking':
          navigation.navigate('/employee/payment/banking', {
            orderId: data.id,
            total: dishesTotalPrice,
            required: true,
          });
          break;
        case 'momo':
          navigation.navigate('/employee/payment/momo', {
            orderId: data.id,
            total: dishesTotalPrice,
            required: true,
          });
          break;
        default:
          navigation.navigate('/employee/payment/cash', {
            orderId: data.id,
            total: dishesTotalPrice,
            required: true,
          });
          break;
      }
    } catch (error) {
      showErrorMessage('Tạo đơn hàng thất bại');
    }
  };

  const renderPaymentMethods = useMemo(() => {
    const imageWidth = (screenWidth * 1) / 2 - 12;
    return (
      <View
        px={3}
        py={4}
        flexDirection={'row'}
        flexWrap="wrap"
        backgroundColor="white"
        justifyContent="space-between">
        {paymentMethods.map(method => (
          <TouchableOpacity
            key={method}
            activeOpacity={0.8}
            onPress={() => setPaymentMethod(method)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: imageWidth,
              height: imageWidth,
              borderWidth: paymentMethod === method ? 1 : 1,
              borderColor:
                paymentMethod === method
                  ? colors.success600
                  : colors.neutralLavender300,
            }}>
            <FastImage
              source={paymentImages[method]}
              style={{
                width: imageWidth - 40,
                height: imageWidth - 40,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }, [paymentMethod]);

  const renderModal = useMemo(() => {
    return (
      <View py={4}>
        <View flexDirection="row" paddingHorizontal={4}>
          <View flex={1}>
            <Text>Tên món</Text>
          </View>

          <View width={64}>
            <Text textAlign={'center'}>SL</Text>
          </View>

          <View width={64}>
            <Text textAlign={'center'}>Giá</Text>
          </View>

          <View width={80}>
            <Text textAlign={'center'}>Thành tiền</Text>
          </View>
        </View>

        <Divider backgroundColor={'neutral500'} />

        <View flex={1}>
          <ScrollView>
            {dishes.map((dish, index) => (
              <View key={JSON.stringify(dish)} paddingHorizontal={4}>
                <InvoiceDishItem dish={dish} />
                {index !== dishes.length - 1 && (
                  <Divider
                    backgroundColor={'neutral500'}
                    width={'100%'}
                    ml={0}
                  />
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        <Divider backgroundColor={'neutral500'} />

        <View flexDirection="row" paddingHorizontal={4}>
          <View flex={1}>
            <Text>Tổng</Text>
          </View>

          <View width={80}>
            <Text textAlign={'center'}>{dishesTotalPrice}k</Text>
          </View>
        </View>
      </View>
    );
  }, [dishesTotalPrice, dishes]);

  const renderDemographics = useMemo(() => {
    return (
      <View
        px={3}
        py={4}
        flexDirection={'row'}
        flexWrap="wrap"
        backgroundColor="white">
        {demographics.map(demographic => (
          <View key={demographic} width={'50%'} mb={2}>
            <CheckBox
              checked={demographicState[demographic]}
              onChange={() =>
                setDemographicState(prev => ({
                  ...prev,
                  [demographic]: !demographicState[demographic],
                }))
              }
              title={getDemographicName(demographic)}
            />
          </View>
        ))}
      </View>
    );
  }, [demographicState]);

  return (
    <Screen topInset bottomInset={false}>
      <View paddingHorizontal={4}>
        <NavButton iconName="ArrowLeft" />
      </View>

      {renderPaymentMethods}

      <Divider />

      {renderDemographics}

      <View flex={1} />

      <PaymentFooter
        value={`${dishesTotalPrice},000 VND`}
        onConfirm={onConfirm}
        onShow={() => modalizeRef.current?.open()}
        btnLoading={isLoading}
      />

      <Modalize ref={modalizeRef} adjustToContentHeight>
        {renderModal}
      </Modalize>
    </Screen>
  );
};

export const InvoiceDishItem = ({dish}: {dish: MainDish}) => {
  return (
    <View flex={1} flexDirection="row" alignItems="center">
      <View flex={1}>
        <Text lineHeight={14} fontSize={12}>
          {getDishNameInInvoice(dish)}
        </Text>
      </View>

      <View width={64}>
        <Text lineHeight={14} fontSize={14} textAlign={'center'}>
          {dish.amount}
        </Text>
      </View>

      <View width={64}>
        <Text lineHeight={14} fontSize={14} textAlign={'center'}>
          {getDishUnitPrice(dish)}k
        </Text>
      </View>

      <View width={80}>
        <Text lineHeight={14} fontSize={14} textAlign={'center'}>
          {getDishTotalPrice(dish)}k
        </Text>
      </View>
    </View>
  );
};

const PaymentFooter = ({
  value,
  onConfirm,
  onShow,
  btnLoading,
}: {
  value: string;
  onConfirm: () => void;
  onShow: () => void;
  btnLoading: boolean;
}) => {
  return (
    <View
      flexDirection="row"
      alignItems="center"
      px={4}
      py={4}
      backgroundColor="white">
      <TouchableOpacity
        onPress={onShow}
        style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Text fontSize={18}>Tổng: {value}</Text>
        <Icon name="ChevronDown" />
      </TouchableOpacity>

      <View>
        <Button title="Xác nhận" onPress={onConfirm} isLoading={btnLoading} />
      </View>
    </View>
  );
};

export default Order;
