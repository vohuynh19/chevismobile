import {useQueryClient} from '@tanstack/react-query';
import moment from 'moment';
import {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '~assets';
import {Button, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {showErrorMessage, showSuccessMessage} from '~core/utils';
import {OrderSchema, useOrders, useUpdateOrder} from '~modules/order';
import {EmployeeScreenProps} from '~navigators/employee';

const OrderHistory = ({
  navigation,
}: EmployeeScreenProps<'/employee/order-history'>) => {
  const {isLoading, orders} = useOrders('UNRESOLVE_ORDER');

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
        <OrderItem key={order.id} order={order} onContinue={onContinue} />
      ))}
    </Screen>
  );
};

const OrderItem = ({
  order,
  onContinue,
}: {
  order: OrderSchema;
  onContinue: (order: OrderSchema) => void;
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
    <>
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
    </>
  );
};

export default OrderHistory;
