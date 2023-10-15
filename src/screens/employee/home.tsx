import {useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {DeviceEventEmitter, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '~assets';
import {useQuitApp} from '~core/hooks';

import {Button, Divider, Icon, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';
import {useLogout} from '~modules/auth';

import {
  MainDish,
  MainDishName,
  MainDishSize,
  ToppingName,
  ToppingRecord,
  defaultToppingRecord,
  getDishNameInInvoice,
  getDishTotalPrice,
  isToppingRecordSelected,
  mainDishImages,
  minifyDish,
  toppingImages,
  toppingNames,
} from '~modules/order';
import {EmployeeScreenProps} from '~navigators/employee';

type SelectedState = {
  name: MainDishName;
  size: MainDishSize;
};

const defaultSelected: SelectedState = {
  name: 'none',
  size: 'M',
};

const Home = ({navigation}: EmployeeScreenProps<'/employee/home'>) => {
  const {t} = useTranslation();

  const {logout} = useLogout();

  const [mainDishes, setMainDishes] = useState<MainDish[]>([]);

  const [selectedDish, setSelectedDish] =
    useState<SelectedState>(defaultSelected);
  const [toppings, setToppings] = useState<ToppingRecord>({
    ...defaultToppingRecord,
  });

  const onPressDish = (name: MainDishName, size: MainDishSize) => {
    setSelectedDish({
      name,
      size,
    });
  };

  const onAdd = () => {
    const newDishes = [
      ...mainDishes,
      {
        name: selectedDish?.name,
        toppings,
        size: selectedDish?.size,
        amount: 1,
      },
    ];

    setMainDishes(minifyDish(newDishes));
    resetTopping();
    resetSelected();
  };

  const onTopping = (name: ToppingName) => {
    toppings[name] = toppings[name] + 1;
    setToppings({...toppings});
  };

  const onIncreaseDish = (dish: MainDish) => {
    dish.amount = dish.amount + 1;
    setMainDishes([...mainDishes]);
  };

  const onDecreaseDish = (dish: MainDish) => {
    dish.amount = dish.amount - 1;

    if (dish.amount <= 0) {
      let index = mainDishes.indexOf(dish);
      if (index !== -1) {
        mainDishes.splice(index, 1);
      }
    }

    setMainDishes([...mainDishes]);
  };

  const resetTopping = () =>
    setToppings({
      ...defaultToppingRecord,
    });

  const resetSelected = () => setSelectedDish(defaultSelected);

  const resetAll = useCallback(() => {
    resetTopping();
    setMainDishes([]);
  }, []);

  const goToOrderPayment = () => {
    navigation.navigate('/employee/order', {
      dishes: mainDishes,
    });
  };

  const onCloseOrder = () => {
    logout();
  };

  const onReset = () => {
    if (isToppingRecordSelected(toppings)) {
      resetTopping();
    } else if (selectedDish.name !== 'none') {
      resetSelected();
    } else {
      resetAll();
    }
  };

  const dishesTotalPrice = useMemo(() => {
    return mainDishes.reduce(
      (prev, current) => prev + getDishTotalPrice(current),
      0,
    );
  }, [mainDishes]);

  useEffect(() => {
    const reloadListener = DeviceEventEmitter.addListener(
      'reloadEmployeeHome',
      resetAll,
    );

    return () => reloadListener.remove();
  }, [resetAll]);

  useQuitApp({
    message: t('message.continueQuitApp'),
  });

  return (
    <Screen topInset>
      <View
        paddingHorizontal={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <NavButton iconName="LogOut" onPress={onCloseOrder} />
        <View flexDirection="row" alignItems="center">
          <View mr={3}>
            <Icon
              name="ReviewDocument"
              onPress={() => navigation.navigate('/employee/order-history')}
            />
          </View>
          <Icon name="Reset" onPress={onReset} />
        </View>
      </View>

      <View flexDirection="row" height={140} paddingHorizontal={4}>
        <MainDishItem
          selectedState={selectedDish}
          name="xet_truyen_thong"
          onPress={onPressDish}
        />
        <MainDishItem
          selectedState={selectedDish}
          name="xet_tan_chay"
          onPress={onPressDish}
        />
      </View>

      <View
        px={4}
        my={4}
        height={70}
        flexDirection="row"
        justifyContent="space-between">
        {toppingNames.map(topping => (
          <ToppingItem
            key={topping}
            name={topping}
            toppingRecord={toppings}
            onPress={onTopping}
          />
        ))}
      </View>

      <View flex={1}>
        {mainDishes.length > 0 ? (
          <ScrollView>
            {mainDishes.map(dish => (
              <View key={JSON.stringify(dish)} paddingHorizontal={4}>
                <MainDishInvoice
                  dish={dish}
                  onIncrease={onIncreaseDish}
                  onDecrease={onDecreaseDish}
                />

                <Divider backgroundColor={'neutral500'} />
              </View>
            ))}
            <View height={64} />
          </ScrollView>
        ) : (
          <View flex={1} justifyContent={'center'} alignItems={'center'}>
            <FastImage
              source={images.xetMiY}
              style={{width: 120, height: 120, marginBottom: 24}}
            />

            <Text fontSize={14} color="secondary800">
              {t('common.touchDishToStartOrder')}
            </Text>
          </View>
        )}

        <View position="absolute" bottom={0} right={24}>
          <Button
            fullWidth={false}
            icon={<Icon name="Add" color="white" />}
            onPress={onAdd}
          />
        </View>
      </View>

      <View paddingHorizontal={4} mt={4}>
        <Button
          title={
            dishesTotalPrice > 0
              ? t('common.paymentWithPrice', {
                  price: `${dishesTotalPrice},000 VND`,
                })
              : t('common.orderPlaceholder')
          }
          disabled={mainDishes.length <= 0}
          onPress={goToOrderPayment}
        />
      </View>
    </Screen>
  );
};

type MainDishItemProps = {
  name: MainDishName;
  selectedState?: SelectedState;
  onPress: (name: MainDishName, size: MainDishSize) => void;
};

const MainDishItem = (props: MainDishItemProps) => {
  const {name, onPress, selectedState} = props;

  const isSelected = name === selectedState?.name;

  return (
    <View flex={1} height={'100%'} borderWidth={1}>
      <FastImage
        source={mainDishImages[name]}
        resizeMode="contain"
        style={{width: '100%', height: '100%'}}
      />

      <View
        position="absolute"
        width="50%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        backgroundColor="primary600"
        opacity={0.3}
        right={0}
        borderColor={'success500'}
      />

      <View
        position="absolute"
        width="50%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        backgroundColor="black"
        opacity={0.3}
      />

      <TouchableOpacity
        onPress={() => onPress(name, 'M')}
        style={{
          position: 'absolute',
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          color={
            isSelected && selectedState.size === 'M' ? 'success600' : 'white'
          }
          fontWeight={isSelected && selectedState.size === 'M' ? '900' : '600'}
          lineHeight={32}
          fontSize={32}>
          M
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPress(name, 'L')}
        style={{
          position: 'absolute',
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          right: 0,
        }}>
        <Text
          color={
            isSelected && selectedState.size === 'L' ? 'success600' : 'white'
          }
          fontWeight={isSelected && selectedState.size === 'L' ? '900' : '600'}
          lineHeight={32}
          fontSize={32}>
          L
        </Text>
      </TouchableOpacity>
    </View>
  );
};

type ToppingItemProps = {
  toppingRecord: ToppingRecord;
  name: ToppingName;
  onPress: (name: ToppingName) => void;
};

const ToppingItem = (props: ToppingItemProps) => {
  const {toppingRecord, name, onPress} = props;
  const amount = toppingRecord[name];

  return (
    <View
      flex={1}
      height={'100%'}
      borderWidth={2}
      borderColor={amount > 0 ? 'success600' : 'neutralLavender600'}>
      <TouchableOpacity onPress={() => onPress(name)} activeOpacity={0.8}>
        <FastImage
          source={toppingImages[name]}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />

        <View
          position={'absolute'}
          width={'100%'}
          height={'100%'}
          alignItems={'center'}
          justifyContent={'center'}>
          {amount > 0 && (
            <>
              <View
                position={'absolute'}
                backgroundColor={'primary600'}
                opacity={0.6}
                width={40}
                height={40}
                borderRadius={'md'}
                alignItems={'center'}
                justifyContent={'center'}
              />
              <Text color={'white'}>{amount}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MainDishInvoice = (props: {
  dish: MainDish;
  onIncrease: (dish: MainDish) => void;
  onDecrease: (dish: MainDish) => void;
}) => {
  const {dish, onIncrease, onDecrease} = props;

  return (
    <View flex={1} flexDirection="row" alignItems="center">
      <View flex={1}>
        <Text> {getDishNameInInvoice(dish)}</Text>
      </View>

      <View ml={2}>
        <Text lineHeight={18} fontSize={18} textAlign={'right'}>
          x{dish.amount}
        </Text>
      </View>

      <View ml={2} flexDirection={'row'}>
        <Button
          size="s"
          variant="secondary"
          title="-"
          onPress={() => onDecrease(dish)}
        />
        <View ml={2} />
        <Button size="s" title="+" onPress={() => onIncrease(dish)} />
      </View>
    </View>
  );
};

export default Home;
