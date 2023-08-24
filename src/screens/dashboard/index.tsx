import React from 'react';
import {Modalize} from 'react-native-modalize';
import FastImage from 'react-native-fast-image';
import {images} from '~assets';

import {Screen, View, Text, Banner} from '~core/ui';
import {screenHeight, screenWidth} from '~core/utils';
import {colors} from '~core/theme/primitives';

const HomeScreen = () => {
  return (
    <Screen topInset backgroundColor="primary300">
      <View
        width={screenWidth}
        justifyContent={'center'}
        alignItems={'center'}
        px={8}>
        <Text
          lineHeight={32}
          fontSize={32}
          color="black"
          style={{position: 'absolute', bottom: 8, right: 72}}>
          +3.0
        </Text>
        <Text
          lineHeight={32}
          fontSize={32}
          color="black"
          style={{position: 'absolute', bottom: 8, left: 72}}>
          -2.5
        </Text>
        <FastImage
          source={images.eyeWithGlass}
          resizeMode="contain"
          style={{
            height: 240,
            width: '100%',
          }}
        />
      </View>

      <View mt={4} px={4}>
        <Banner text="Đọc sách 3 tiếng một ngày có thể làm mắt bạn giảm đi 0.00001 độ" />
      </View>

      <Modalize
        modalTopOffset={80}
        alwaysOpen={(screenHeight * 2) / 5}
        avoidKeyboardLikeIOS={true}>
        <View alignItems="center" mt={8}>
          <FastImage
            tintColor={colors.neutral800}
            source={images.tumbleE}
            resizeMode="contain"
            style={{width: 160, height: 160}}
          />

          <Text mt={6}>Let's do your first eye checking!</Text>
        </View>
      </Modalize>
    </Screen>
  );
};

export default HomeScreen;
