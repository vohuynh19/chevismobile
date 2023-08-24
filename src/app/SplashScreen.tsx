import {Image} from 'react-native';
import {images} from '~assets';
import {View} from '~core/ui';

const SplashScreen = () => (
  <View flex={1} justifyContent={'center'} alignItems={'center'}>
    <Image
      source={images.amanVista}
      resizeMode="cover"
      style={{
        width: 96,
        height: 96,
      }}
    />
  </View>
);

export default SplashScreen;
