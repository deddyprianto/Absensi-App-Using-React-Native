/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HowToUse from './HowToUse';
import HomeAbsen from '../HomeAbsen';
import HeaderStyle from './HeaderStyle/HeaderStyle';

const MemberTabBottomNavigation = ({navigation}) => {
  // useHook
  useLayoutEffect(() => {
    navigation.setOptions({
      header: ({scene}) => {
        const {options} = scene.descriptor;
        const title =
          options.headerTitle !== undefined
            ? options.headerTitle !== undefined
            : options.title !== undefined
            ? options.title
            : scene.route.name;
        return <HeaderStyle title={title} />;
      },
    });
  }, [navigation]);
  // init
  const Tab = createMaterialBottomTabNavigator();

  // component
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#030E21'}}
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Absen Sekarang"
        component={HowToUse}
        options={{
          tabBarLabel: 'Haloo',
          tabBarIcon: ({color, size}) => (
            <Icon name="smileo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeAbsen}
        options={{
          tabBarLabel: 'Absen',
          tabBarIcon: ({color, size}) => (
            <Icon name="solution1" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
// adb shell input keyevent 82
export default MemberTabBottomNavigation;

const styles = StyleSheet.create({
  // container di atas Bottom NAV
  containerScene: {
    backgroundColor: '#120F10',
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
