import React from 'react';

import {images} from '~assets';
import {screenWidth} from '~core/utils';
import {Screen, View, Text, FastImage} from '~core/ui';

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
    </Screen>
  );
};

export default HomeScreen;
