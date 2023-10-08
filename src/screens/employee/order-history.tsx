import {useQueryClient} from '@tanstack/react-query';
import moment from 'moment';
import {useCallback, useRef, useState} from 'react';
import {ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Modalize} from 'react-native-modalize';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';

import {Button, RefreshControl, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {screenHeight, showErrorMessage, showSuccessMessage} from '~core/utils';
import {
  OrderSchema,
  getOrderQueryKey,
  useOrders,
  useUpdateOrder,
} from '~modules/order';
import {EmployeeScreenProps, EmployeeStackParams} from '~navigators/employee';
import {images} from '~assets';

import {InvoiceDish} from './order';

const OrderHistory = ({
  navigation,
}: EmployeeScreenProps<'/employee/order-history'>) => {
  const {t} = useTranslation();

  const {isLoading, orders, refetch} = useOrders('LATEST_10');
  const {updateOrder, isLoading: updateLoading} = useUpdateOrder();

  const [currentOrder, setCurrentOrder] = useState<OrderSchema>();

  const modalRef = useRef<Modalize>(null);

  const onDelete = async () => {
    try {
      await updateOrder({
        id: currentOrder?.id || '',
        updateInfo: {
          status: 'DELETED',
        },
      });
      showSuccessMessage(t('message.deleteOrderSuccess'));
      await refetch();
      modalRef.current?.close();
    } catch (error) {
      showErrorMessage(t('message.deleteOrderFail'));
    }
  };

  const onShowModal = useCallback((order: OrderSchema) => {
    setCurrentOrder(order);
    setTimeout(() => modalRef.current?.open(), 100);
  }, []);

  const isCurrentOrderDisabled =
    currentOrder?.status === 'DONE' || currentOrder?.status === 'DELETED';

  const handleOrderCreated = (order: OrderSchema) => {
    modalRef.current?.close();

    switch (order.paymentMethod) {
      case 'banking':
        navigation.navigate('/employee/payment/banking', {
          orderId: order?.id || '',
          total: order.totalPrice,
          required: false,
        });
        break;
      case 'momo':
        navigation.navigate('/employee/payment/momo', {
          orderId: order?.id || '',
          total: order.totalPrice,
          required: false,
        });
        break;
      default:
        navigation.navigate('/employee/payment/cash', {
          orderId: order?.id || '',
          total: order.totalPrice,
          required: false,
        });
        break;
    }
  };
  const handleOrderProcessing = async (order: OrderSchema) => {
    try {
      await updateOrder({
        id: order.id || '',
        updateInfo: {
          status: 'DONE',
        },
      });
      showSuccessMessage(t('message.orderConfirmSuccess'));
      modalRef.current?.close();
      await refetch();
    } catch (error) {
      showErrorMessage(t('error.generalTitle'));
    }
  };

  const onContinue = (order: OrderSchema) => {
    switch (order.status) {
      case 'CREATED':
        handleOrderCreated(order);
        break;
      case 'PROCESSING':
        handleOrderProcessing(order);
        break;

      default:
        showErrorMessage(t('error.generalTitle'));
        break;
    }
  };

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <Screen topInset px={4}>
      <View flexDirection="row" alignItems="center">
        <NavButton />
        <Text fontWeight="700" fontSize={18}>
          {t('common.orderHistory')}
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
            {t('common.emptyOrderHistory')}
          </Text>
        </View>
      )}

      <View flex={1}>
        <ScrollView refreshControl={<RefreshControl onRefresh={refetch} />}>
          {orders?.map(order => (
            <OrderItem
              key={order.id}
              order={order}
              onPress={onShowModal}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>

      <Modalize
        ref={modalRef}
        adjustToContentHeight
        childrenStyle={{
          height: (screenHeight * 3) / 5,
        }}>
        {currentOrder && (
          <InvoiceDish
            dishes={currentOrder?.dishes}
            total={currentOrder?.totalPrice}
          />
        )}

        <View flexDirection="row" mb={4} px={4}>
          <Button
            flex
            disabled={isCurrentOrderDisabled}
            isLoading={updateLoading}
            variant="secondary"
            title={t('action.delete')}
            onPress={onDelete}
          />

          <Button
            flex
            disabled={isCurrentOrderDisabled}
            isLoading={updateLoading}
            variant="primary"
            title={
              currentOrder?.status === 'CREATED'
                ? t('action.continue')
                : t('action.confirm')
            }
            onPress={() => currentOrder && onContinue(currentOrder)}
          />
        </View>
      </Modalize>
    </Screen>
  );
};

const OrderItem = ({
  order,
  onPress,
  navigation,
}: {
  order: OrderSchema;
  onPress: (order: OrderSchema) => void;
  navigation: StackNavigationProp<
    EmployeeStackParams,
    '/employee/order-history',
    undefined
  >;
}) => {
  const {t} = useTranslation();
  const {updateOrder, isLoading} = useUpdateOrder();
  const client = useQueryClient();

  const handleOrderCreated = () => {
    switch (order.paymentMethod) {
      case 'banking':
        navigation.navigate('/employee/payment/banking', {
          orderId: order?.id || '',
          total: order.totalPrice,
          required: false,
        });
        break;
      case 'momo':
        navigation.navigate('/employee/payment/momo', {
          orderId: order?.id || '',
          total: order.totalPrice,
          required: false,
        });
        break;
      default:
        navigation.navigate('/employee/payment/cash', {
          orderId: order?.id || '',
          total: order.totalPrice,
          required: false,
        });
        break;
    }
  };
  const handleOrderProcessing = async () => {
    try {
      await updateOrder({
        id: order.id || '',
        updateInfo: {
          status: 'DONE',
        },
      });
      showSuccessMessage(t('message.orderConfirmSuccess'));
      await client.invalidateQueries(getOrderQueryKey('LATEST_10'));
    } catch (error) {
      showErrorMessage(t('error.generalTitle'));
    }
  };

  const onContinue = () => {
    switch (order.status) {
      case 'CREATED':
        handleOrderCreated();
        break;
      case 'PROCESSING':
        handleOrderProcessing();
        break;

      default:
        showErrorMessage(t('error.generalTitle'));
        break;
    }
  };

  const getOrderColor = () => {
    switch (order.status) {
      case 'CREATED':
        return 'neutral600';
      case 'PROCESSING':
        return 'warning600';
      case 'DONE':
        return 'success600';
      case 'DELETED':
        return 'error600';
      default:
        return 'neutral600';
    }
  };

  const getStatus = () => {
    switch (order.status) {
      case 'CREATED':
        return 'Chưa thanh toán';
      case 'PROCESSING':
        return 'Đang chờ bếp';
      case 'DONE':
        return 'Đã hoàn thành';
      case 'DELETED':
        return 'Đã huỷ';
      default:
        return 'Không xác định';
    }
  };

  const isBtnDisabled = order.status === 'DONE' || order.status === 'DELETED';

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
          <Text pb={1} fontWeight="700" fontSize={20}>
            {order.totalPrice},000 VND
          </Text>
          <Text>Vào lúc: {moment(order.updatedAt).format('HH:mm')}</Text>
          <Text color={getOrderColor()}>{getStatus()}</Text>
        </View>

        <View flexDirection="row">
          <Button
            disabled={isBtnDisabled}
            isLoading={isLoading}
            variant="primary"
            size="s"
            title={
              order.status === 'CREATED'
                ? t('action.continue')
                : t('action.confirm')
            }
            onPress={onContinue}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderHistory;
