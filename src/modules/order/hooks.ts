import {useMutation, useQuery} from '@tanstack/react-query';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

import {OrderSchema} from './schema';
import Config from 'react-native-config';

type OrderFilterType =
  | 'ALL'
  | 'UNRESOLVE_ORDER'
  | 'LATEST_10'
  | 'ALL_DONE_TODAY'
  | 'ALL_DONE_MORNING'
  | 'ALL_DONE_EVENING';

const getCollection = (name: 'orders') => {
  if (Config.ENV === 'test') {
    return `test_${name}`;
  }
  return name;
};

export const getOrderQueryKey = (type: OrderFilterType) => ['order', type];

const createOrder = ({
  dishes,
  totalPrice,
  demographics,
  status,
  paymentMethod,
  imageUrl = '',
}: OrderSchema) =>
  firestore().collection(getCollection('orders')).add({
    status,
    dishes,
    totalPrice,
    demographics,
    paymentMethod,
    imageUrl,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

export const useCreateOrder = () => {
  const {mutateAsync, isLoading, error} = useMutation(createOrder);
  return {
    createOrder: mutateAsync,
    isLoading,
    error,
  };
};

const updateOrder = ({
  id,
  updateInfo,
}: {
  id: string;
  updateInfo: Partial<OrderSchema>;
}) =>
  firestore()
    .collection(getCollection('orders'))
    .doc(id)
    .update({
      ...updateInfo,
      updatedAt: new Date().toISOString(),
    });

export const useUpdateOrder = () => {
  const {mutateAsync, isLoading, error} = useMutation(updateOrder);
  return {
    updateOrder: mutateAsync,
    isLoading,
    error,
  };
};

export const useOrders = (type: OrderFilterType, fetchOnMount = true) => {
  const request = async () => {
    switch (type) {
      case 'LATEST_10':
        return firestore()
          .collection(getCollection('orders'))
          .orderBy('createdAt', 'desc')
          .limit(10)
          .get()
          .then(data => {
            return data.docs
              .map(
                val =>
                  ({
                    ...val.data(),
                    id: val.id,
                  } as OrderSchema),
              )
              .filter(order => {
                const orderTime = moment(
                  moment(order.createdAt).format('YYYY-MM-DD'),
                );
                const nowTime = moment(moment().format('YYYY-MM-DD'));
                return nowTime.diff(orderTime, 'day') === 0;
              });
          });

      case 'ALL_DONE_MORNING':
        return firestore()
          .collection(getCollection('orders'))
          .orderBy('createdAt', 'desc')
          .limit(1000)
          .get()
          .then(data => {
            return data.docs
              .map(
                val =>
                  ({
                    ...val.data(),
                    id: val.id,
                  } as OrderSchema),
              )
              .filter(order => {
                const orderDate = moment(
                  moment(order.createdAt).format('YYYY-MM-DD'),
                );
                const nowDate = moment(moment().format('YYYY-MM-DD'));

                const orderTime = moment(order.createdAt);
                const maxTime = moment(
                  `${moment(order.createdAt).format('YYYY-MM-DD')} 11:00`,
                );

                return (
                  nowDate.diff(orderDate, 'day') === 0 &&
                  maxTime.isAfter(orderTime) &&
                  order.status === 'DONE'
                );
              });
          });

      case 'ALL_DONE_EVENING':
        return firestore()
          .collection(getCollection('orders'))
          .orderBy('createdAt', 'desc')
          .limit(1000)
          .get()
          .then(data => {
            return data.docs
              .map(
                val =>
                  ({
                    ...val.data(),
                    id: val.id,
                  } as OrderSchema),
              )
              .filter(order => {
                const orderDate = moment(
                  moment(order.createdAt).format('YYYY-MM-DD'),
                );
                const nowDate = moment(moment().format('YYYY-MM-DD'));

                const minTime = moment(
                  `${moment(order.createdAt).format('YYYY-MM-DD')} 15:00`,
                );
                const orderTime = moment(order.createdAt);
                const maxTime = moment(
                  `${moment(order.createdAt).format('YYYY-MM-DD')} 23:00`,
                );

                return (
                  nowDate.diff(orderDate, 'day') === 0 &&
                  minTime.isBefore(orderTime) &&
                  maxTime.isAfter(orderTime) &&
                  order.status === 'DONE'
                );
              });
          });

      case 'ALL_DONE_TODAY':
        return firestore()
          .collection(getCollection('orders'))
          .orderBy('createdAt', 'desc')
          .limit(1000)
          .get()
          .then(data => {
            return data.docs
              .map(
                val =>
                  ({
                    ...val.data(),
                    id: val.id,
                  } as OrderSchema),
              )
              .filter(order => {
                const orderDate = moment(
                  moment(order.createdAt).format('YYYY-MM-DD'),
                );
                const nowDate = moment(moment().format('YYYY-MM-DD'));

                return (
                  nowDate.diff(orderDate, 'day') === 0 &&
                  order.status === 'DONE'
                );
              });
          });

      case 'ALL':
        return firestore()
          .collection(getCollection('orders'))
          .orderBy('createdAt', 'desc')
          .limit(1000)
          .get()
          .then(data => {
            return data.docs.map(
              val =>
                ({
                  ...val.data(),
                  id: val.id,
                } as OrderSchema),
            );
          });

      default:
        throw 'Not supported';
    }
  };

  const {data, isLoading, error, refetch} = useQuery({
    queryFn: request,
    queryKey: getOrderQueryKey(type),
    enabled: fetchOnMount,
  });

  return {
    orders: data,
    isLoading,
    error,
    refetch,
  };
};
