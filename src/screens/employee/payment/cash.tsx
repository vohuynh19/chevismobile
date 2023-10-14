import {StackActions} from '@react-navigation/native';
import {useCallback, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {DeviceEventEmitter} from 'react-native';
import {useBack} from '~core/hooks';
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
  const {t} = useTranslation();

  const {params} = route;
  const {orderId, total, required = false} = params;

  const {isLoading, updateOrder} = useUpdateOrder();
  const notFinished = useRef(true);

  const [value, setValue] = useState('');

  const returnValue = (Number(value) || 0) - total;

  const confirmPayment = async () => {
    if (returnValue < 0) {
      showErrorMessage(t('message.invalidReceivedAmount'));
      return;
    }

    await updateOrder({
      id: orderId,
      updateInfo: {
        status: 'PROCESSING',
        returnPrice: returnValue,
      },
    });
    notFinished.current = false;

    showSuccessMessage(t('message.orderPaymentSuccess'));
    DeviceEventEmitter.emit(EvenListenterName.reloadEmployeeHome);

    const popAction = StackActions.popToTop();
    navigation.dispatch(popAction);
    navigation.navigate('/employee/order-history');
  };

  const deletePayment = useCallback(async () => {
    await updateOrder({
      id: orderId,
      updateInfo: {
        status: 'DELETED',
      },
    });
    notFinished.current = false;
    showSuccessMessage(t('message.backToPaymentMethod'));
    navigation.goBack();
  }, [orderId, navigation, updateOrder, t]);

  useBack({
    enabled: required,
    stateRef: notFinished,
    title: t('action.goBack'),
    description: t('message.paymentBeforeGoBack'),
    cancelText: t('action.cancel'),
    okText: t('action.goBack'),
    onPress: deletePayment,
  });

  return (
    <Screen topInset px={4}>
      <View flexDirection="row" alignItems="center">
        <NavButton />
        <Text fontWeight="700" fontSize={18}>
          {t('common.cashTitle')}
        </Text>
      </View>

      <Text mt={6} mb={4} fontSize={18}>
        {t('common.totalPrice')}
      </Text>

      <View alignItems="center" justifyContent="center">
        <Text lineHeight={40} fontSize={40}>
          {total}k
        </Text>
      </View>

      <Divider />

      <Text mb={4} fontSize={18}>
        {t('common.receivedPrice')}
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
        {t('common.returnPrice')}
      </Text>

      <View alignItems="center" justifyContent="center">
        <Text lineHeight={40} fontSize={40}>
          {returnValue}k
        </Text>
      </View>

      <View flex={1} />
      <Button
        title={t('action.confirmOrder')}
        onPress={confirmPayment}
        isLoading={isLoading}
      />
    </Screen>
  );
};

export default Cash;
