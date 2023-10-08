import moment from 'moment';
import {useCallback, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Modalize} from 'react-native-modalize';
import {useTranslation} from 'react-i18next';
import {useFocusEffect} from '@react-navigation/native';

import {RefreshControl, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {OrderSchema, useOrders} from '~modules/order';
import {images} from '~assets';
import {InvoiceDish} from '~screens/employee/order';
import {HostScreenProps} from '~navigators/host';
import {screenHeight} from '~core/utils';

const OrderHistory = ({}: HostScreenProps<'/host/history'>) => {
  const {t} = useTranslation();

  const {isLoading, orders, refetch} = useOrders('ALL');

  const [currentOrder, setCurrentOrder] = useState<OrderSchema>();

  const modalRef = useRef<Modalize>(null);

  const onShowModal = useCallback((order: OrderSchema) => {
    setCurrentOrder(order);
    modalRef.current?.open();
    // setTimeout(() => modalRef.current?.open(), 0);
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
        <FlatList
          refreshControl={<RefreshControl onRefresh={refetch} />}
          data={orders}
          renderItem={({item}) => {
            return (
              <OrderItem key={item.id} order={item} onPress={onShowModal} />
            );
          }}
        />
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
      </Modalize>
    </Screen>
  );
};

const OrderItem = ({
  order,
  onPress,
}: {
  order: OrderSchema;
  onPress: (order: OrderSchema) => void;
}) => {
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
          <Text>
            Vào lúc: {moment(order.updatedAt).format('HH:mm DD/MM/YYYY')}
          </Text>
        </View>

        <View>
          <Text color={getOrderColor()}>{getStatus()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderHistory;
