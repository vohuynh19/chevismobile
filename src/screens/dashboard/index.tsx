import React from 'react';
import {images} from '~assets';
import {PrescriptionHistoryBottomSheet} from '~bottom-sheets';
import {screenWidth} from '~core/utils';
import {Screen, View, Text, Banner, FastImage} from '~core/ui';

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

      <PrescriptionHistoryBottomSheet />
    </Screen>
  );
};

export default HomeScreen;
