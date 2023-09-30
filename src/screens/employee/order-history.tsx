import {useQueryClient} from '@tanstack/react-query';
import moment from 'moment';
import {useCallback, useRef, useState} from 'react';
import {ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Modalize} from 'react-native-modalize';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';

import {Button, RefreshControl, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {showErrorMessage, showSuccessMessage} from '~core/utils';
import {OrderSchema, useOrders, useUpdateOrder} from '~modules/order';
import {EmployeeScreenProps, EmployeeStackParams} from '~navigators/employee';
import {images} from '~assets';

import {InvoiceDish} from './order';
import {useFocusEffect} from '@react-navigation/native';

const OrderHistory = ({
  navigation,
}: EmployeeScreenProps<'/employee/order-history'>) => {
  const {t} = useTranslation();

  const {isLoading, orders, refetch} = useOrders('UNRESOLVE_ORDER');

  const [currentOrder, setCurrentOrder] = useState<OrderSchema>();

  const modalRef = useRef<Modalize>(null);

  const onShowModal = useCallback((order: OrderSchema) => {
    setCurrentOrder(order);
    setTimeout(() => modalRef.current?.open(), 100);
  }, []);

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
          {t('common.unfinishedOrder')}
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
            {t('common.noUnfinishedOrder')}
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

      <Modalize ref={modalRef} adjustToContentHeight>
        {currentOrder && (
          <InvoiceDish
            dishes={currentOrder?.dishes}
            total={currentOrder?.totalPrice}
          />
        )}
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

  const onDelete = async () => {
    try {
      await updateOrder({
        id: order.id || '',
        updateInfo: {
          status: 'DELETED',
        },
      });
      showSuccessMessage(t('message.deleteOrderSuccess'));
      await client.invalidateQueries(['order', 'UNRESOLVE_ORDER']);
    } catch (error) {
      showErrorMessage(t('message.deleteOrderFail'));
    }
  };

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
      await client.invalidateQueries(['order', 'UNRESOLVE_ORDER']);
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
      default:
        return 'Không xác định';
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
          <Text color={getOrderColor()}>{getStatus()}</Text>
        </View>

        <View flexDirection="row">
          <Button
            isLoading={isLoading}
            variant="secondary"
            size="s"
            title={t('action.delete')}
            onPress={onDelete}
          />
          <Button
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
