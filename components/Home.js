/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {actionSaveNameGroup, actionsPathNameGroup} from '../actions/action';
const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [namegroup, setNamegroup] = useState('');
  // db.collection('users').doc(id).get().then(snapshot => setUserDetails(snapshot.data()))
  useEffect(() => {
    const cekData = firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .get()
      .then(snapshot => snapshot);
    if (cekData) {
      const dataPath = firestore()
        .collection('server')
        .doc('Im3cRGiZmrQEyunsObeE')
        .collection().path;
      dispatch(actionsPathNameGroup(dataPath));
    }
  }, []);
  const buttonMakeGroup = () => {
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(namegroup);
    dispatch(actionSaveNameGroup(namegroup));
    navigation.navigate('Absen');
  };

  return (
    <View style={styles.containerInti}>
      <View style={styles.container}>
        <Text style={styles.textButton}>
          Apakah anda ADMIN? hanya admin yg dapat mengisi Nama Grup Absen
        </Text>
        <View style={styles.containerInput}>
          <TextInput
            value={namegroup}
            onChangeText={value => setNamegroup(value)}
            style={styles.input}
            placeholder="Masukkan Nama Grup Anda"
            keyboardType="default"
          />
        </View>
        <Button
          onPress={buttonMakeGroup}
          title="Buat Grup Absen"
          containerStyle={styles.button}
        />
        <Button
          onPress={() => navigation.navigate('Absen')}
          title="Member Langsung ke List"
          containerStyle={styles.button}
        />
      </View>
      <View style={styles.buttonNavigation}>
        <View style={styles.rumah}>
          <Icon name="home" size={20} color="gray" />
          <Text style={styles.textButton}>Rumah</Text>
        </View>
        <View style={styles.list}>
          <Icon name="profile" size={20} color="gray" />
          <Text style={styles.textButton}>List Manual</Text>
        </View>
        <View style={styles.pdf}>
          <Icon name="pdffile1" size={20} color="gray" />
          <Text style={styles.textButton}>HasilKan PDF</Text>
        </View>
      </View>
    </View>
  );
};
// adb shell input keyevent 82
export default Home;

const styles = StyleSheet.create({
  containerInti: {
    flex: 1,
  },
  // container di atas Bottom NAV
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  // khusus input dan tombol
  containerInput: {
    borderRadius: 20,
    width: '80%',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  input: {height: 40, flex: 1, marginLeft: 10},
  button: {width: '50%', margin: 10},
});
