import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {Slider} from '@miblanchard/react-native-slider';
// import FastImage from 'react-native-fast-image';
// import Permissions, {PERMISSIONS} from 'react-native-permissions';
// import {RINGER_MODE, getRingerMode} from 'react-native-volume-manager';

import colors from '~core/config/colors';

const AdjustSoundScreen = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text>AdjustSoundScreen</Text>
        {/* <HeaderToolbar isBackIcon />
        <TextRSemiBold customStyle={styles.header}>
          {textValues.header}
        </TextRSemiBold>
        <TextRRegular customStyle={styles.desc}>{textValues.desc}</TextRRegular>

        <View style={styles.sliderWrapper}>
          <Slider
            onValueChange={vol => handleChangeVolume(vol[0])}
            value={volumeLevel}
            style={styles.sliderStyle}
            trackStyle={styles.trackStyle}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={Colors.green_6}
            maximumTrackTintColor={Colors._E5E5E5}
            tapToSeek
            thumbStyle={styles.thumbStyle}
            renderThumbComponent={() => (
              <FastImage source={images.speaker} style={styles.thumbStyle} />
            )}
          />
        </View>

        <Button
          customStyles={styles.button}
          isSingle
          onPressSingleButton={goToCheckCondition}
          singleButtonText={textValues.done}
        /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    paddingTop: 12,
    flex: 1,
  },
  header: {
    fontSize: 18,
    color: colors.text,
    lineHeight: 27,
    marginTop: 12,
  },
  desc: {
    marginTop: 12,
    fontSize: 14,
    color: colors.text,
    lineHeight: 21,
  },
  button: {
    marginBottom: 44,
    width: '100%',
  },
  sliderWrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  sliderStyle: {
    width: '100%',
    height: 24,
  },
  thumbStyle: {
    width: 44,
    height: 44,
  },
  trackStyle: {
    height: 5,
  },
});

export default AdjustSoundScreen;
