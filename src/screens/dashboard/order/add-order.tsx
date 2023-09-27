import {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '~assets';

import {Button, Divider, Icon, Screen, Text, View} from '~core/ui';
import {NavButton} from '~core/ui/navigation/NavButton';

import {
  MainDish,
  MainDishName,
  ToppingName,
  ToppingRecord,
  defaultToppingRecord,
  getMainDishName,
  getTopping,
  mainDishImages,
  minifyDish,
  toppingImages,
  toppingNames,
} from '~modules/order';

import {OrderScreenProps} from '~navigators/types';

const AddOrderScreen = ({
  navigation,
}: OrderScreenProps<'/dashboard/order/add-order'>) => {
  const [mainDishes, setMainDishes] = useState<MainDish[]>([]);

  const [toppings, setToppings] = useState<ToppingRecord>({
    ...defaultToppingRecord,
  });

  const onMainDish = (name: MainDishName) => {
    const newDishes = [
      ...mainDishes,
      {
        amount: 1,
        name,
        toppings,
      },
    ];

    setMainDishes(minifyDish(newDishes));
    resetTopping();
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

  const resetAll = () => {
    resetTopping();
    setMainDishes([]);
  };

  const goToOrderPayment = () => {
    navigation.navigate('/dashboard/order/order-payment', {
      dishes: mainDishes,
    });
  };

  const onCloseOrder = () => {
    resetAll();
    navigation.goBack();
  };

  return (
    <Screen topInset>
      <View
        paddingHorizontal={4}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <NavButton iconName="Close" onPress={onCloseOrder} />
        <Icon name="Reset" onPress={resetAll} />
      </View>

      <View flexDirection="row" height={140} paddingHorizontal={4}>
        <MainDishItem name="xet_truyen_thong" onPress={onMainDish} />
        <MainDishItem name="xet_tan_chay" onPress={onMainDish} />
      </View>

      <View
        paddingHorizontal={4}
        height={70}
        mt={4}
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
                <Divider backgroundColor={'neutral500'} />

                <MainDishInvoice
                  dish={dish}
                  onIncrease={onIncreaseDish}
                  onDecrease={onDecreaseDish}
                />
              </View>
            ))}
          </ScrollView>
        ) : (
          <View flex={1} justifyContent={'center'} alignItems={'center'}>
            <FastImage
              source={images.xetMiY}
              style={{width: 120, height: 120, marginBottom: 12}}
            />

            <Text>Chọn món đi nào!!!</Text>
          </View>
        )}
      </View>

      <View paddingHorizontal={4} mt={4}>
        <Button
          title="Đi đến thanh toán"
          disabled={mainDishes.length <= 0}
          onPress={goToOrderPayment}
        />
      </View>
    </Screen>
  );
};

type MainDishItemProps = {
  name: MainDishName;
  onPress: (name: MainDishName) => void;
};

const MainDishItem = (props: MainDishItemProps) => {
  const {name, onPress} = props;

  return (
    <View flex={1} height={'100%'} borderWidth={1}>
      <TouchableOpacity onPress={() => onPress(name)}>
        <FastImage
          source={mainDishImages[name]}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
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
      <TouchableOpacity onPress={() => onPress(name)}>
        <FastImage
          source={toppingImages[name]}
          resizeMode="contain"
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
        <Text>{`${getMainDishName(dish.name)}${getTopping(dish)}`}</Text>
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

export default AddOrderScreen;
