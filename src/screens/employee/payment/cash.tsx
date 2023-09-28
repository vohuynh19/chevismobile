import {useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {Button, Divider, Input, Screen, Text, View} from '~core/ui';
import {showErrorMessage, showSuccessMessage} from '~core/utils';
import {useUpdateOrder} from '~modules/order';
import {EvenListenterName} from '~modules/types';
import {EmployeeScreenProps} from '~navigators/employee';

const Cash = ({
  navigation,
  route,
}: EmployeeScreenProps<'/employee/payment/cash'>) => {
  const {params} = route;
  const {orderId, total} = params;

  const {isLoading, updateOrder} = useUpdateOrder();

  const [value, setValue] = useState('0');

  const returnValue = (Number(value) || 0) - total;

  const confirmPayment = async () => {
    if (returnValue < 0) {
      showErrorMessage('Tiền nhận không hợp lệ');
      return;
    }

    await updateOrder({
      id: orderId,
      updateInfo: {
        status: 'CONFIRMED',
      },
    });

    showSuccessMessage('Xác nhận đơn hàng thành công');
    DeviceEventEmitter.emit(EvenListenterName.reloadEmployeeHome);
    navigation.navigate('/employee/home');
  };

  return (
    <Screen topInset px={4}>
      <Text lineHeight={28} fontSize={24} my={4}>
        Thanh toán tiền mặt
      </Text>

      <Text mt={6} mb={4} fontSize={18}>
        Tổng tiền
      </Text>

      <View alignItems="center" justifyContent="center">
        <Text lineHeight={40} fontSize={40}>
          {total}k
        </Text>
      </View>

      <Divider />

      <Text mb={4} fontSize={18}>
        Nhận tiền
      </Text>
      <Input
        value={value}
        onChangeText={text => setValue(text)}
        style={{
          height: 80,
        }}
        keyboardType="number-pad"
        inputStyle={{
          fontSize: 40,
          lineHeight: 44,
          textAlign: 'center',
        }}
      />

      <Divider />

      <Text mt={6} mb={4} fontSize={18}>
        Thối tiền
      </Text>

      <View alignItems="center" justifyContent="center">
        <Text lineHeight={40} fontSize={40}>
          {returnValue}k
        </Text>
      </View>

      <View flex={1} />
      <Button
        title="Xác nhận đơn hàng"
        onPress={confirmPayment}
        isLoading={isLoading}
      />
    </Screen>
  );
};

export default Cash;
