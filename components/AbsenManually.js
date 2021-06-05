/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AbsenManually = () => {
  const [namegroup, setNamegroup] = useState('');
  const [show, setShow] = useState(false);
  const [namalengkap, setNamalengkap] = useState('');
  const [kehadiran, setKehadiran] = useState('');

  const buttonMakeGroup = () => {
    setShow(true);
  };
  const absenSekarang = () => {
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(namegroup)
      .add({nama: namalengkap, status: kehadiran});
    setNamalengkap('');
    setKehadiran('');
    alert('berhasil');
  };
  return (
    <View style={styles.container}>
      {show === false ? (
        <>
          <View style={styles.containerInput}>
            <TextInput
              value={namegroup}
              onChangeText={value => setNamegroup(value)}
              style={styles.input}
              placeholder="Wajib! Masukkan Nama Grup ABSEN"
              keyboardType="default"
            />
          </View>
          <Button
            onPress={buttonMakeGroup}
            title="Buat"
            containerStyle={styles.button}
          />
        </>
      ) : (
        <ScrollView>
          <View style={styles.containerList}>
            <Text>Halooo,{namegroup}</Text>
            <View style={styles.containerInput}>
              <TextInput
                value={namalengkap}
                onChangeText={value => setNamalengkap(value)}
                style={styles.input}
                placeholder="Nama Lengkap"
                keyboardType="default"
              />
            </View>
            <View style={styles.containerInput}>
              <TextInput
                value={kehadiran}
                onChangeText={value => setKehadiran(value)}
                style={styles.input}
                placeholder="Status Kehadiran"
                keyboardType="default"
              />
            </View>
            <Button
              onPress={absenSekarang}
              title="Buat List"
              containerStyle={styles.button}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default AbsenManually;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerList: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  inputanList: {width: '100%'},
  containerInput: {
    borderRadius: 20,
    width: '90%',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    alignItems: 'center',
  },
  input: {height: 40, marginLeft: 10, width: '100%'},
  button: {width: '50%', margin: 10},
});
