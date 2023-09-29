import {useQueryClient} from '@tanstack/react-query';
import moment from 'moment';
import {useCallback, useRef, useState} from 'react';
import {ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Modalize} from 'react-native-modalize';
import {images} from '~assets';
import {Button, Divider, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {showErrorMessage, showSuccessMessage} from '~core/utils';
import {OrderSchema, useOrders, useUpdateOrder} from '~modules/order';
import {EmployeeScreenProps} from '~navigators/employee';
import {InvoiceDishItem} from './order';

const OrderHistory = ({
  navigation,
}: EmployeeScreenProps<'/employee/order-history'>) => {
  const {isLoading, orders} = useOrders('UNRESOLVE_ORDER');

  const [currentOrder, setCurrentOrder] = useState<OrderSchema>();

  const modalRef = useRef<Modalize>(null);

  const onContinue = useCallback(
    (order: OrderSchema) => {
      switch (order.paymentMethod) {
        case 'banking':
          navigation.navigate('/employee/payment/banking', {
            orderId: order?.id || '',
            total: order.totalPrice,
          });
          break;
        case 'momo':
          navigation.navigate('/employee/payment/momo', {
            orderId: order?.id || '',
            total: order.totalPrice,
          });
          break;
        default:
          navigation.navigate('/employee/payment/cash', {
            orderId: order?.id || '',
            total: order.totalPrice,
          });
          break;
      }
    },
    [navigation],
  );
  const onShowModal = useCallback((order: OrderSchema) => {
    setCurrentOrder(order);
    setTimeout(() => modalRef.current?.open(), 100);
  }, []);

  return (
    <Screen topInset px={4}>
      <View flexDirection="row" alignItems="center">
        <NavButton />
        <Text fontWeight="700" fontSize={18}>
          Đơn hàng chưa hoành thành
        </Text>
      </View>

      {isLoading && <ActivityIndicator />}

      {orders?.length === 0 && (
        <View flex={1} justifyContent={'center'} alignItems={'center'}>
          <FastImage
            source={images.xetMiY}
            style={{width: 120, height: 120, marginBottom: 24}}
          />

          <Text fontSize={14} color="secondary800">
            Không có đơn chưa xử lí nào
          </Text>
        </View>
      )}

      {orders?.map(order => (
        <OrderItem
          key={order.id}
          order={order}
          onContinue={onContinue}
          onPress={onShowModal}
        />
      ))}

      <Modalize ref={modalRef} adjustToContentHeight>
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
              {currentOrder?.dishes.map((dish, index) => (
                <View key={JSON.stringify(dish)} paddingHorizontal={4}>
                  <InvoiceDishItem dish={dish} />
                  {index !== currentOrder?.dishes.length - 1 && (
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
              <Text textAlign={'center'}>{currentOrder?.totalPrice}k</Text>
            </View>
          </View>
        </View>
      </Modalize>
    </Screen>
  );
};

const OrderItem = ({
  order,
  onContinue,
  onPress,
}: {
  order: OrderSchema;
  onContinue: (order: OrderSchema) => void;
  onPress: (order: OrderSchema) => void;
}) => {
  const {updateOrder, isLoading} = useUpdateOrder();
  const client = useQueryClient();

  const onDelete = async () => {
    try {
      await updateOrder({
        id: order.id || '',
        updateInfo: {
          status: 'DELETED',
        },
      });
      showSuccessMessage('Xoá đơn thành công');
      await client.invalidateQueries(['UNRESOLVE_ORDER']);
    } catch (error) {
      showErrorMessage('Không thể xoá đơn, vui lòng thử lại');
    }
  };

  return (
    <TouchableOpacity onPress={() => onPress(order)} activeOpacity={0.8}>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={'white'}
        mb={4}
        p={4}
        borderRadius="lg">
        <View>
          <Text>{order.totalPrice},000 VND</Text>
          <Text>{moment(order.updatedAt).format('HH:mm DD/MM')}</Text>
        </View>

        <View flexDirection="row">
          <Button
            isLoading={isLoading}
            variant="secondary"
            size="s"
            title="Xoá"
            onPress={onDelete}
          />
          <Button
            variant="primary"
            size="s"
            title="Tiếp tục"
            onPress={() => onContinue(order)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderHistory;
