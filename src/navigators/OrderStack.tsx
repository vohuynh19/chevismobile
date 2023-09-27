import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {OrderStackParams} from './types';
import AddOrderScreen from '~screens/dashboard/order/add-order';
import OrderPaymentScreen from '~screens/dashboard/order/order-payment';

export const OrderStack = createStackNavigator<OrderStackParams>();

const OrderStackScreen = () => (
  <OrderStack.Navigator
    initialRouteName={'/dashboard/order/add-order'}
    screenOptions={{
      headerShown: false,
    }}>
    <OrderStack.Screen
      name={'/dashboard/order/add-order'}
      component={AddOrderScreen}
    />

    <OrderStack.Screen
      name={'/dashboard/order/order-payment'}
      component={OrderPaymentScreen}
    />
  </OrderStack.Navigator>
);

export default OrderStackScreen;
