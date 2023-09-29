import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';

import {MainDish} from '~modules/order';

import Home from '~screens/employee/home';
import Order from '~screens/employee/order';
import Cash from '~screens/employee/payment/cash';
import Momo from '~screens/employee/payment/momo';

import {SCREEN_PATHS} from './paths';
import Banking from '~screens/employee/payment/banking';
import CameraCapture from '~screens/common/camera-capture';
import {EvenListenterName} from '~modules/types';
import OrderHistory from '~screens/employee/order-history';

export type EmployeeScreenProps<T extends keyof EmployeeStackParams> =
  StackScreenProps<EmployeeStackParams, T>;

export type EmployeeStackParams = {
  [SCREEN_PATHS.EMPLOYEE.HOME]: undefined;
  [SCREEN_PATHS.EMPLOYEE.ORDER]: {
    dishes: MainDish[];
  };
  [SCREEN_PATHS.EMPLOYEE.PAYMENT.CASH]: {
    orderId: string;
    total: number;
  };
  [SCREEN_PATHS.EMPLOYEE.PAYMENT.BANKING]: {
    orderId: string;
    total: number;
  };
  [SCREEN_PATHS.EMPLOYEE.PAYMENT.MOMO]: {
    orderId: string;
    total: number;
  };

  [SCREEN_PATHS.COMMON.CAMERA_CAPTURE]: {
    returnPath: keyof EmployeeStackParams;
    returnParams: any;
    callbackEvent: EvenListenterName;
  };

  [SCREEN_PATHS.EMPLOYEE.ORDER_HISTORY]: undefined;
};

export const EmployeeStack = createStackNavigator<EmployeeStackParams>();

const EmployeeStackSreen = () => {
  return (
    <EmployeeStack.Navigator
      initialRouteName={'/employee/home'}
      screenOptions={{
        headerShown: false,
      }}>
      <EmployeeStack.Screen name="/employee/home" component={Home} />
      <EmployeeStack.Screen name="/employee/order" component={Order} />
      <EmployeeStack.Screen
        name="/employee/order-history"
        component={OrderHistory}
      />

      <EmployeeStack.Screen
        name="/common/camera-capture"
        component={CameraCapture}
      />

      <EmployeeStack.Group
        navigationKey={SCREEN_PATHS.EMPLOYEE.PAYMENT.__NAME__}>
        <EmployeeStack.Screen name="/employee/payment/cash" component={Cash} />
        <EmployeeStack.Screen
          name="/employee/payment/banking"
          component={Banking}
        />
        <EmployeeStack.Screen name="/employee/payment/momo" component={Momo} />
      </EmployeeStack.Group>
    </EmployeeStack.Navigator>
  );
};

export default EmployeeStackSreen;
