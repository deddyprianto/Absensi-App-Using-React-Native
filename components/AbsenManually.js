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
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const AbsenManually = () => {
  // hook
  const emailUser = useSelector(state => state.loginReducer);
  const {dataLogin} = emailUser;
  const [namegroup, setNamegroup] = useState('');
  const [show, setShow] = useState(false);
  const [namalengkap, setNamalengkap] = useState('');
  const [checkHadir, setCheckHadir] = useState(false);
  const [checkSakit, setCheckSakit] = useState(false);
  const [checkIzin, setCheckIzin] = useState(false);
  const [checkAlpha, setCheckAlpha] = useState(false);
  const [hadir, setHadir] = useState('');
  const [sakit, setSakit] = useState('');
  const [izin, setIzin] = useState('');
  const [alpha, setAlpha] = useState('');

  // variable
  const statusHadir = 'hadir';
  const statusSakit = 'sakit';
  const statusIzin = 'izin';
  const statusAlpha = 'alpha';
  const circleO = <Icon name="circle-o" color="#eaeaea" size={25} />;
  const dotCircleOHadir = (
    <Icon name="dot-circle-o" color="#A9D08E" size={25} />
  );
  const dotCircleOSakit = (
    <Icon name="dot-circle-o" color="#00B0F0" size={25} />
  );
  const dotCircleOIzin = <Icon name="dot-circle-o" color="#FFD966" size={25} />;
  const dotCircleOAlpha = (
    <Icon name="dot-circle-o" color="#FF5050" size={25} />
  );

  // function
  const buttonMakeGroup = () => {
    setShow(true);
    setNamegroup('');
  };
  const absenSekarang = () => {
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(namegroup)
      .add({
        nama: namalengkap,
        status:
          statusHadir === hadir
            ? hadir
            : statusSakit === sakit
            ? sakit
            : statusIzin === izin
            ? izin
            : statusAlpha === alpha
            ? alpha
            : 'anda tidak memilih opsi status kehadirans',
      });
    setNamalengkap('');
    alert('berhasil, silahkan convert ke file PDF');
  };
  const tombolHadir = () => {
    setCheckHadir(true);
    setHadir(statusHadir);
  };
  const tombolSakit = () => {
    setCheckSakit(true);
    setSakit(statusSakit);
  };
  const tombolIzin = () => {
    setCheckIzin(true);
    setIzin(statusIzin);
  };
  const tombolAlpha = () => {
    setCheckAlpha(true);
    setAlpha(statusAlpha);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
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
              title="Buat Grup"
              containerStyle={styles.button}
            />
          </>
        ) : (
          <View style={styles.containerList}>
            <Text>Nama Grup:{namegroup}</Text>
            <View style={styles.containerInput}>
              <TextInput
                value={namalengkap}
                onChangeText={value => setNamalengkap(value)}
                style={styles.input}
                placeholder="Nama Lengkap"
                keyboardType="default"
              />
            </View>
            <View style={styles.containerCheckBox}>
              <Text style={styles.fontText}>Pilih Kehadiran</Text>
              <CheckBox
                center
                title="Hadir"
                checkedIcon={dotCircleOHadir}
                uncheckedIcon={circleO}
                onPress={tombolHadir}
                checked={checkHadir}
                containerStyle={styles.checkBox}
                textStyle={{color: '#eaeaea'}}
                uncheckedColor="white"
              />
              <CheckBox
                center
                title="Sakit"
                checkedIcon={dotCircleOSakit}
                uncheckedIcon={circleO}
                onPress={tombolSakit}
                checked={checkSakit}
                containerStyle={styles.checkBox}
                textStyle={{color: '#eaeaea'}}
                uncheckedColor="white"
              />
              <CheckBox
                center
                title="Izin"
                checkedIcon={dotCircleOIzin}
                uncheckedIcon={circleO}
                onPress={tombolIzin}
                checked={checkIzin}
                containerStyle={styles.checkBox}
                textStyle={{color: '#eaeaea'}}
                uncheckedColor="white"
              />
              <CheckBox
                center
                title="Alpha"
                checkedIcon={dotCircleOAlpha}
                uncheckedIcon={circleO}
                onPress={tombolAlpha}
                checked={checkAlpha}
                containerStyle={styles.checkBox}
                textStyle={{color: '#eaeaea'}}
                uncheckedColor="white"
              />
            </View>
            <Button
              onPress={absenSekarang}
              title="Kirim Data"
              containerStyle={styles.button}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AbsenManually;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#120F10',
  },
  containerContent: {
    backgroundColor: '#2C3545',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontText: {fontSize: 12, color: '#eaeaea'},
  checkBox: {
    width: '70%',
    backgroundColor: 'transparent',
  },
  containerList: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
  containerCheckBox: {
    width: '100%',
    alignItems: 'center',
  },
});
