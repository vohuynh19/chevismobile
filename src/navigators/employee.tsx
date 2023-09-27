import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import {SCREEN_PATHS} from './paths';

import Home from '~screens/employee/home';

export type EmployeeScreenProps<T extends keyof EmployeeStackParams> =
  StackScreenProps<EmployeeStackParams, T>;

export type EmployeeStackParams = {
  [SCREEN_PATHS.EMPLOYEE.HOME]: undefined;
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
    </EmployeeStack.Navigator>
  );
};

export default EmployeeStackSreen;
