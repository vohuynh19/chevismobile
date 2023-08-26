import {Modalize} from 'react-native-modalize';

import {images} from '~assets';
import {colors} from '~core/theme';
import {screenHeight} from '~core/utils';
import {FastImage, Text, View} from '~core/ui';

export const PrescriptionHistoryBottomSheet = () => {
  return (
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
  );
};
