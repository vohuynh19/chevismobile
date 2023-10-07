import {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Modalize} from 'react-native-modalize';

import {EmployeeScreenProps} from '~navigators/employee';
import {colors} from '~core/theme';
import {Screen, View, Text, Divider, Button, CheckBox, Icon} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {screenWidth, showErrorMessage, showSuccessMessage} from '~core/utils';
import {
  Demographic,
  MainDish,
  defaultDemographics,
  demographics,
  getDemographicName,
  getDishNameInInvoice,
  getDishTotalPrice,
  getDishUnitPrice,
  useCreateOrder,
} from '~modules/order';
import {PaymentMethod, paymentImages, paymentMethods} from '~modules/payment';
import {useTranslation} from 'react-i18next';

const Order = ({navigation, route}: EmployeeScreenProps<'/employee/order'>) => {
  const {t} = useTranslation();
  const {params} = route;
  const {dishes} = params;
  const modalizeRef = useRef<Modalize>(null);
  const {createOrder, isLoading} = useCreateOrder();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const demographicRef = useRef<DemographicsRef>(null);

  const dishesTotalPrice = useMemo(() => {
    return dishes.reduce(
      (prev, current) => prev + getDishTotalPrice(current),
      0,
    );
  }, [dishes]);

  const onConfirm = async () => {
    try {
      const demographicData = demographicRef.current?.getState();
      if (demographicData) {
        if (
          !(Object.keys(demographicData) as Demographic[]).reduce(
            (prev, cur) => {
              return prev + (demographicData[cur] ? 1 : 0);
            },
            0,
          )
        ) {
          showErrorMessage(t('message.fillDemographic'));
          return;
        }
      }

      const data = await createOrder({
        dishes,
        paymentMethod,
        status: 'CREATED',
        demographics: demographicData!!,
        totalPrice: dishesTotalPrice,
      });

      showSuccessMessage(t('message.createOrderSuccess', {orderId: data.id}));

      switch (paymentMethod) {
        case 'banking':
          navigation.navigate('/employee/payment/banking', {
            orderId: data.id,
            total: dishesTotalPrice,
            required: true,
          });
          break;
        case 'momo':
          navigation.navigate('/employee/payment/momo', {
            orderId: data.id,
            total: dishesTotalPrice,
            required: true,
          });
          break;
        default:
          navigation.navigate('/employee/payment/cash', {
            orderId: data.id,
            total: dishesTotalPrice,
            required: true,
          });
          break;
      }
    } catch (error) {
      showErrorMessage(t('message.createOrderFail'));
    }
  };

  const imageWidth = (screenWidth * 1) / 2 - 12;

  return (
    <Screen topInset bottomInset={false}>
      <View paddingHorizontal={4}>
        <NavButton iconName="ArrowLeft" />
      </View>
      <View flex={1}>
        <ScrollView>
          <View
            px={3}
            py={4}
            flexDirection={'row'}
            flexWrap="wrap"
            backgroundColor="white"
            justifyContent="space-between">
            {paymentMethods.map(method => (
              <TouchableOpacity
                key={method}
                activeOpacity={0.8}
                onPress={() => setPaymentMethod(method)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: imageWidth,
                  height: imageWidth,
                  borderWidth: paymentMethod === method ? 1 : 1,
                  borderColor:
                    paymentMethod === method
                      ? colors.success600
                      : colors.neutralLavender300,
                }}>
                <FastImage
                  source={paymentImages[method]}
                  style={{
                    width: imageWidth - 40,
                    height: imageWidth - 40,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>

          <Divider />

          <Demographics ref={demographicRef} />
        </ScrollView>
      </View>

      <PaymentFooter
        value={`${dishesTotalPrice},000 VND`}
        onConfirm={onConfirm}
        onShow={() => modalizeRef.current?.open()}
        btnLoading={isLoading}
      />

      <Modalize ref={modalizeRef} adjustToContentHeight handlePosition="inside">
        <InvoiceDish total={dishesTotalPrice} dishes={dishes} />
      </Modalize>
    </Screen>
  );
};

type DemographicsProps = {};
type DemographicsRef = {
  getState: () => Record<Demographic, boolean>;
};

const Demographics: ForwardRefExoticComponent<
  DemographicsProps & RefAttributes<DemographicsRef>
> = forwardRef(({}, ref) => {
  const [demographicState, setDemographicState] = useState(defaultDemographics);

  useImperativeHandle(ref, () => ({
    getState: () => demographicState,
  }));

  return (
    <View
      px={3}
      py={4}
      flexDirection={'row'}
      flexWrap="wrap"
      backgroundColor="white">
      {demographics.map(demographic => (
        <View key={demographic} width={'50%'} mb={2}>
          <CheckBox
            checked={demographicState[demographic]}
            onChange={() =>
              setDemographicState(prev => ({
                ...prev,
                [demographic]: !demographicState[demographic],
              }))
            }
            title={getDemographicName(demographic)}
          />
        </View>
      ))}
    </View>
  );
});

export const InvoiceDish = ({
  total,
  dishes,
}: {
  total: number;
  dishes: MainDish[];
}) => {
  const {t} = useTranslation();

  return (
    <View py={4}>
      <View flexDirection="row" paddingHorizontal={4}>
        <View flex={1}>
          <Text>{t('common.dishName')}</Text>
        </View>

        <View width={64}>
          <Text textAlign={'center'}>{t('common.abb.amount')}</Text>
        </View>

        <View width={64}>
          <Text textAlign={'center'}>{t('common.abb.unitPrice')}</Text>
        </View>

        <View width={80}>
          <Text textAlign={'center'}>{t('common.abb.totalPrice')}</Text>
        </View>
      </View>

      <Divider backgroundColor={'neutral500'} />

      <View flex={1}>
        <ScrollView>
          {dishes.map((dish, index) => (
            <View key={JSON.stringify(dish)} paddingHorizontal={4}>
              <InvoiceDishItem dish={dish} />
              {index !== dishes.length - 1 && (
                <Divider backgroundColor={'neutral500'} width={'100%'} ml={0} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>

      <Divider backgroundColor={'neutral500'} />

      <View flexDirection="row" paddingHorizontal={4}>
        <View flex={1}>
          <Text>{t('common.total')}</Text>
        </View>

        <View width={80}>
          <Text textAlign={'center'}>{total}k</Text>
        </View>
      </View>
    </View>
  );
};

export const InvoiceDishItem = ({dish}: {dish: MainDish}) => {
  return (
    <View flex={1} flexDirection="row" alignItems="center">
      <View flex={1}>
        <Text lineHeight={14} fontSize={12}>
          {getDishNameInInvoice(dish)}
        </Text>
      </View>

      <View width={64}>
        <Text lineHeight={14} fontSize={14} textAlign={'center'}>
          {dish.amount}
        </Text>
      </View>

      <View width={64}>
        <Text lineHeight={14} fontSize={14} textAlign={'center'}>
          {getDishUnitPrice(dish)}k
        </Text>
      </View>

      <View width={80}>
        <Text lineHeight={14} fontSize={14} textAlign={'center'}>
          {getDishTotalPrice(dish)}k
        </Text>
      </View>
    </View>
  );
};

const PaymentFooter = ({
  value,
  onConfirm,
  onShow,
  btnLoading,
}: {
  value: string;
  onConfirm: () => void;
  onShow: () => void;
  btnLoading: boolean;
}) => {
  const {t} = useTranslation();

  return (
    <View
      flexDirection="row"
      alignItems="center"
      px={4}
      py={4}
      backgroundColor="white">
      <TouchableOpacity
        onPress={onShow}
        style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Text fontSize={18}>{t('common.totalWithPrice', {value})} </Text>
        <Icon name="ChevronDown" />
      </TouchableOpacity>

      <View>
        <Button
          title={t('action.confirm')}
          onPress={onConfirm}
          isLoading={btnLoading}
        />
      </View>
    </View>
  );
};

export default Order;
