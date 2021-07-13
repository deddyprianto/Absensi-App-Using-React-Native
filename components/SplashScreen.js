/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const SplashScreen = () => {
  // hook
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => {
      // cleanup
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#060831" />
      <Icon name="file-pdf-o" size={100} color="#FF5050" />
      <Text style={styles.textLogin}>Convert your Absensi To PDF</Text>
    </View>
  );
};
// F2F8FD
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050830',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: '#eaeaea',
    fontSize: 15,
  },
  image: {
    width: 200,
    height: 200,
  },
});
