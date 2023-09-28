import {useMutation} from '@tanstack/react-query';

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
    });

export const useUpdateOrder = () => {
  const {mutateAsync, isLoading, error} = useMutation(updateOrder);
  return {
    updateOrder: mutateAsync,
    isLoading,
    error,
  };
};
