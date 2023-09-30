import {useMutation, useQuery} from '@tanstack/react-query';

import firestore from '@react-native-firebase/firestore';
import {OrderSchema} from './schema';
import moment from 'moment';
import {OrderStatus} from './types';

const createOrder = ({
  dishes,
  totalPrice,
  demographics,
  status,
  paymentMethod,
  imageUrl = '',
}: OrderSchema) =>
  firestore().collection('orders').add({
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
    .collection('orders')
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

type OrderFilterType = 'UNRESOLVE_ORDER';

const getByStatus = (status: OrderStatus) =>
  firestore()
    .collection('orders')
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

export const useOrders = (type: OrderFilterType) => {
  const request = async () => {
    switch (type) {
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

  const {data, isLoading, error, refetch} = useQuery(['order', type], request);

  return {
    orders: data,
    isLoading,
    error,
    refetch,
  };
};
