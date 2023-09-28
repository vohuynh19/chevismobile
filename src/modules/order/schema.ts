import {PaymentMethod} from '~modules/payment';
import {Demographic, MainDish, OrderStatus} from './types';

export type OrderSchema = {
  dishes: MainDish[];
  totalPrice: number;
  demographics: Record<Demographic, boolean>;
  status: OrderStatus;
  paymentMethod: PaymentMethod;

  imageUrl?: string;
};
