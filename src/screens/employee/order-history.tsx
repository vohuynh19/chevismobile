import {useQueryClient} from '@tanstack/react-query';
import moment from 'moment';
import {useCallback, useRef, useState} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Modalize} from 'react-native-modalize';
import {images} from '~assets';
import {Button, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {showErrorMessage, showSuccessMessage} from '~core/utils';
import {OrderSchema, useOrders, useUpdateOrder} from '~modules/order';
import {EmployeeScreenProps} from '~navigators/employee';
import {InvoiceDish} from './order';
import {useTranslation} from 'react-i18next';

const OrderHistory = ({
  navigation,
}: EmployeeScreenProps<'/employee/order-history'>) => {
  const {t} = useTranslation();

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

      {orders?.map(order => (
        <OrderItem
          key={order.id}
          order={order}
          onContinue={onContinue}
          onPress={onShowModal}
        />
      ))}

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
  onContinue,
  onPress,
}: {
  order: OrderSchema;
  onContinue: (order: OrderSchema) => void;
  onPress: (order: OrderSchema) => void;
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
      await client.invalidateQueries(['UNRESOLVE_ORDER']);
    } catch (error) {
      showErrorMessage(t('message.deleteOrderFail'));
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
            title={t('action.delete')}
            onPress={onDelete}
          />
          <Button
            variant="primary"
            size="s"
            title={t('action.continue')}
            onPress={() => onContinue(order)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderHistory;
