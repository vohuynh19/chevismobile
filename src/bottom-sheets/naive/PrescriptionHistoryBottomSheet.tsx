import {Modalize} from 'react-native-modalize';

import {screenHeight} from '~core/utils';
import {Text, View} from '~core/ui';

export const PrescriptionHistoryBottomSheet = () => {
  return (
    <Modalize
      modalTopOffset={80}
      alwaysOpen={(screenHeight * 2) / 5}
      avoidKeyboardLikeIOS={true}>
      <View alignItems="center" mt={8}>
        <Text mt={6}>Let's do your first eye checking!</Text>
      </View>
    </Modalize>
  );
};
