import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {images} from '~assets';
import layout from '~core/utils/layout';
import colors from '~core/config/colors';

type HeaderToolbarType = {
  isBackIcon: boolean;
  RightComponent: JSX.Element;
  onGoBack: () => void;
};

const HeaderToolbar: React.FC<HeaderToolbarType> = ({
  isBackIcon,
  RightComponent,
  onGoBack,
}) => {
  const navigation = useNavigation();

  const handleGoBack = () => (onGoBack ? onGoBack() : navigation.goBack());

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.close} onPress={handleGoBack}>
        <FastImage
          style={isBackIcon ? styles.backIcon : styles.closeIcon}
          source={images.back}
        />
      </TouchableOpacity>

      <View style={styles.leftIcon}>{RightComponent && RightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  backIcon: {
    width: 16,
    height: 12,
  },
  headphone: {
    width: 16,
    height: 16,
    tintColor: '#766EC8',
  },
  searchBox: {
    ...layout.rowCenter,
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: colors._E5E5E5,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  close: {
    paddingVertical: 4,
  },
});

export default HeaderToolbar;
