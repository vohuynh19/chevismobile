import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {Slider} from '@miblanchard/react-native-slider';
// import FastImage from 'react-native-fast-image';
// import Permissions, {PERMISSIONS} from 'react-native-permissions';
// import {RINGER_MODE, getRingerMode} from 'react-native-volume-manager';

const AdjustSoundScreen = () => {
  return (
    <>
      <View>
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

const styles = StyleSheet.create({});

export default AdjustSoundScreen;
