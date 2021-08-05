/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeAbsen from '../HomeAbsen';
import AbsenManually from '../AbsenManually';
import HasilkanPDF from '../HasilkanPDF';
import HeaderStyle from '../Member/HeaderStyle/HeaderStyle';

const AdminTabBottomNavigation = ({navigation}) => {
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
  }, []);
  // init
  const Tab = createMaterialBottomTabNavigator();
  // MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
  // MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
  // MYAPP_UPLOAD_STORE_PASSWORD=bunga1234
  // MYAPP_UPLOAD_KEY_PASSWORD=bunga1234

  // component
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#353f4e'}}
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
            <Icon name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="render PDF"
        component={HasilkanPDF}
        options={{
          tabBarLabel: 'Hasilkan PDF',
          tabBarIcon: ({color, size}) => (
            <Icon name="file-pdf-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
// adb shell input keyevent 82
export default AdminTabBottomNavigation;

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
