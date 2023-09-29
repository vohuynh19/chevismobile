import {useMutation, useQuery} from '@tanstack/react-query';

import firestore from '@react-native-firebase/firestore';
import {OrderSchema} from './schema';

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

export const useOrders = (type: OrderFilterType) => {
  const request = async () => {
    switch (type) {
      case 'UNRESOLVE_ORDER':
        return firestore()
          .collection('orders')
          .where('status', '==', 'CREATED')
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
        return firestore()
          .collection('orders')
          .where('status', '==', 'CREATED')
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
    }
  };

  const {data, isLoading, error} = useQuery(['UNRESOLVE_ORDER'], request);

  return {
    orders: data,
    isLoading,
    error,
  };
};
