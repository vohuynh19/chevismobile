import {images} from '~assets';
import {PaymentMethod} from './type';

export const paymentMethods: PaymentMethod[] = ['cash', 'banking', 'momo'];

export const paymentImages: Record<PaymentMethod, any> = {
  banking: images.vietqr,
  cash: images.cash,
  momo: images.momo,
};
