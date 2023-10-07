import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import {SCREEN_PATHS} from './paths';
import Home from '~screens/host/home';

export type HostScreenProps<T extends keyof HostStackParams> = StackScreenProps<
  HostStackParams,
  T
>;

export type HostStackParams = {
  [SCREEN_PATHS.HOST.HOME]: undefined;
};

export const HostStack = createStackNavigator<HostStackParams>();

const HostStackScreen = () => {
  return (
    <HostStack.Navigator
      initialRouteName={'/host/home'}
      screenOptions={{
        headerShown: false,
      }}>
      <HostStack.Screen name="/host/home" component={Home} />
    </HostStack.Navigator>
  );
};

export default HostStackScreen;
