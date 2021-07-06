/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {ListItem, Button} from 'react-native-elements';
import {actionSaveStatusUser} from '../actions/action';
const PageQuestion = () => {
  // useHook
  const [pilihAdmin, setPilihAdmin] = useState('pilih');
  const [pilihAnggota, setPilihAnggota] = useState('pilih');
  const {dataLogin} = useSelector(state => state.loginReducer);
  const [stateRouteApp, setStateRouteApp] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      title: 'Home Screen',
      headerStyle: {backgroundColor: '#3F8A83'},
      headerTintColor: 'white',
    });
  }, [navigation]);
  // variable
  const admin = 'admin';
  const anggota = 'anggota';
  // function
  const tombolAdmin = () => {
    setPilihAdmin('saya admin');
    dispatch(actionSaveStatusUser({nama: dataLogin.displayName, role: admin}));
    setStateRouteApp(admin);
  };
  const tombolAnggota = () => {
    setPilihAnggota('saya anggota');
    dispatch(
      actionSaveStatusUser({nama: dataLogin.displayName, role: anggota}),
    );
    setStateRouteApp(anggota);
  };

  // component
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.fontText}>
          Haloo, {dataLogin.displayName} Pilih Role Kamu
        </Text>
        <View>
          <ListItem bottomDivider containerStyle={styles.listKey}>
            <ListItem.Content>
              <ListItem.Title>{admin}</ListItem.Title>
            </ListItem.Content>
            <Button title={pilihAdmin} onPress={tombolAdmin} />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{anggota}</ListItem.Title>
            </ListItem.Content>
            <Button title={pilihAnggota} onPress={tombolAnggota} />
          </ListItem>
        </View>
      </View>
      <Button
        title="Next"
        type="outline"
        onPress={() => navigation.replace(stateRouteApp)}
        containerStyle={styles.button}
      />
    </View>
  );
};

export default PageQuestion;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fontText: {fontSize: 20, margin: 30},
  button: {
    width: '50%',
    marginTop: 50,
  },
});
