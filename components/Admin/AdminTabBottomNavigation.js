/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeAbsen from '../HomeAbsen';
import AbsenManually from '../AbsenManually';
import HasilkanPDF from '../HasilkanPDF';
import {useSelector} from 'react-redux';
const Home = ({navigation}) => {
  // useHook
  const {userstatus} = useSelector(state => state.statusUser);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      title: `Halaman ${userstatus.role}`,
      headerStyle: {backgroundColor: '#3F8A83'},
      headerTintColor: 'white',
    });
  }, []);
  // init
  const Tab = createBottomTabNavigator();

  // component
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.containerScene}
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeAbsen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Manually"
        component={AbsenManually}
        options={{
          tabBarLabel: 'Absen Manual',
          tabBarIcon: ({color, size}) => (
            <Icon name="copy1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="render PDF"
        component={HasilkanPDF}
        options={{
          tabBarLabel: 'Hasilkan PDF',
          tabBarIcon: ({color, size}) => (
            <Icon name="pdffile1" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
// adb shell input keyevent 82
export default Home;

const styles = StyleSheet.create({
  containerInti: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // container di atas Bottom NAV
  containerScene: {
    backgroundColor: '#3F8A83',
    borderBottomLeftRadius: 200,
  },
  textButton: {fontSize: 12, color: 'gray'},
  buttonNavigation: {
    width: '100%',
    height: 50,
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
  },
  rumah: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    left: '40%',
  },
});
