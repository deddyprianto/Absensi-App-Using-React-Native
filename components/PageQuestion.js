/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Button, CheckBox} from 'react-native-elements';
import HeaderStyle from './Member/HeaderStyle/HeaderStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import {saveStatusUser} from '../features/appSlice';
const PageQuestion = () => {
  // useHook
  const {displayName} = useSelector(state => state.appstate.dataLogin);
  const [stateRouteApp, setStateRouteApp] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [checkedAdmin, setCheckedAdmin] = useState(false);
  const [checkedAnggota, setCheckedAnggota] = useState(false);

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
  // variable
  const admin = 'admin';
  const anggota = 'anggota';
  const dotCircleO = <Icon name="dot-circle-o" color="#A9D08E" size={25} />;
  const circleO = <Icon name="circle-o" color="#eaeaea" size={25} />;
  // function
  const tombolAdmin = () => {
    setCheckedAdmin(true);
    dispatch(saveStatusUser({nama: displayName, role: admin}));
    setStateRouteApp(admin);
  };
  const tombolAnggota = () => {
    setCheckedAnggota(true);
    dispatch(saveStatusUser({nama: displayName, role: anggota}));
    setStateRouteApp(anggota);
  };

  // component
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2C3545" />
      <View style={styles.containerContent}>
        <Text style={styles.fontText}>
          Haloo, {displayName} Pilih Role Kamu
        </Text>
        <CheckBox
          center
          title="Saya Admin"
          checkedIcon={dotCircleO}
          uncheckedIcon={circleO}
          onPress={tombolAdmin}
          checked={checkedAdmin}
          containerStyle={styles.checkBox}
          textStyle={{color: '#eaeaea'}}
          uncheckedColor="white"
        />
        <CheckBox
          center
          title="Saya Anggota"
          checkedIcon={dotCircleO}
          uncheckedIcon={circleO}
          onPress={tombolAnggota}
          checked={checkedAnggota}
          containerStyle={styles.checkBox}
          textStyle={{color: '#eaeaea'}}
          uncheckedColor="white"
        />
        <Button
          title="Next"
          onPress={() => navigation.replace(stateRouteApp)}
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default PageQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030E21',
  },
  containerContent: {
    backgroundColor: '#2C3545',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkBox: {
    width: '70%',
    backgroundColor: 'transparent',
  },
  listKey: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#eaeaea',
    width: '80%',
  },
  fontText: {fontSize: 20, margin: 30, marginTop: 70, color: 'white'},
  button: {
    width: '50%',
    marginTop: 50,
  },
});
