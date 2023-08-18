import React, {useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {RootStackScreenProps} from '~navigators/RootStack.type';

const SplashScreen = ({navigation}: RootStackScreenProps<'/'>) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('/vision-test', {
        screen: '/vision-test/home',
      });
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="hello world" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default SplashScreen;
