import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, DeviceEventEmitter} from 'react-native';
import {Button, Divider, Input, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
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
  const notFinished = useRef(true);

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
    notFinished.current = false;

    showSuccessMessage('Xác nhận đơn hàng thành công');
    DeviceEventEmitter.emit(EvenListenterName.reloadEmployeeHome);
    navigation.navigate('/employee/home');
  };

  const deletePayment = useCallback(async () => {
    await updateOrder({
      id: orderId,
      updateInfo: {
        status: 'DELETED',
      },
    });
    notFinished.current = false;
    showSuccessMessage(
      'Quay về thành công, vui lòng tiếp tục chọn phương thức thanh toán khác',
    );
    navigation.goBack();
  }, [orderId, navigation, updateOrder]);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
        if (notFinished.current) {
          Alert.alert(
            'Quay về',
            'Vui lòng hoàn thành thanh toán trước khi quay về',
            [
              {text: 'Ở lại', style: 'cancel', onPress: () => {}},
              {
                text: 'Vẫn quay về',
                style: 'destructive',
                onPress: deletePayment,
              },
            ],
          );
        } else {
          navigation.dispatch(e.data.action);
        }
      }),
    [navigation, deletePayment],
  );

  return (
    <Screen topInset px={4}>
      <View flexDirection="row" alignItems="center">
        <NavButton />
        <Text fontWeight="700" fontSize={18}>
          Thanh toán tiền mặt
        </Text>
      </View>

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
