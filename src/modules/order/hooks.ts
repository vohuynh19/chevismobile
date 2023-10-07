import {useMutation, useQuery} from '@tanstack/react-query';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

import {appConfig} from '~config';

import {OrderSchema} from './schema';
import {OrderStatus} from './types';

type OrderFilterType = 'UNRESOLVE_ORDER' | 'LATEST_10';

const getCollection = (name: 'orders' | '') => {
  if (appConfig.isTesting) {
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

const getByStatus = (status: OrderStatus) =>
  firestore()
    .collection(getCollection('orders'))
    .where('status', '==', status)
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
      default:
        return Promise.all([
          getByStatus('CREATED'),
          getByStatus('PROCESSING'),
        ]).then(val => {
          const mergeResponse = val.reduce((prev, cur) => {
            return [...prev, ...cur];
          }, []);
          return mergeResponse.sort((a, b) => {
            const aDate = moment(a.updatedAt || '');
            const bDate = moment(b.updatedAt || '');
            return bDate.diff(aDate);
          });
        });
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
