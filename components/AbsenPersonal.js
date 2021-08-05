/* eslint-disable prettier/prettier */
import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {CheckBox, Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import HeaderStyle from './Member/HeaderStyle/HeaderStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const AbsenPersonal = () => {
  // use Hook
  const navigation = useNavigation();
  const group = useSelector(state => state.appstate.nameGroup);
  const {displayName} = useSelector(state => state.appstate.dataLogin);
  const [show, setShow] = useState(false);
  const [grup, setGrup] = useState('');
  const [checkHadir, setCheckHadir] = useState(false);
  const [checkSakit, setCheckSakit] = useState(false);
  const [checkIzin, setCheckIzin] = useState(false);
  const [checkAlpha, setCheckAlpha] = useState(false);
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
  const hadir = 'hadir';
  const sakit = 'sakit';
  const izin = 'izin';
  const alpha = 'alpha';
  // function
  const checkNameGrup = () => {
    if (grup.length === 0) {
      alert('masukkan nama Grup kamu');
    } else {
      setShow(true);
    }
  };
  const tombolHadir = () => {
    setCheckHadir(true);
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(grup.length === 0 ? group?.name : grup)
      .add({nama: displayName, status: hadir});
    alert('berhasil, status kamu Hadir');
  };
  const tombolSakit = () => {
    setCheckSakit(true);
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(grup.length === 0 ? group?.name : grup)
      .add({nama: displayName, status: sakit});
    alert('berhasil, status kamu Sakit');
  };
  const tombolIzin = () => {
    setCheckIzin(true);
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(grup.length === 0 ? group?.name : grup)
      .add({nama: displayName, status: izin});
    alert('berhasil, status kamu Izin');
  };
  const tombolAlpha = () => {
    setCheckAlpha(true);
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(grup.length === 0 ? group?.name : grup)
      .add({nama: displayName, status: alpha});
    alert('berhasil, status kamu Alpha');
  };
  // value
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
  // component
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.textPeringatan}>Halo, {displayName}</Text>
        {!group?.name ? (
          <View style={styles.containerCheckBox}>
            <View style={styles.containerInput}>
              <TextInput
                value={grup}
                onChangeText={value => setGrup(value)}
                style={styles.input}
                placeholder="Masukkan Nama Grup yg anda buat tadi"
                keyboardType="default"
              />
            </View>
            <Button
              title="Check"
              onPress={checkNameGrup}
              containerStyle={styles.button}
            />
            {show && (
              <View>
                <Text style={styles.fontText}>Pilih Kehadiran Anda</Text>
                <CheckBox
                  center
                  title="Saya Hadir"
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
                  title="Saya Sakit"
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
                  title="Saya Izin"
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
                  title="Saya Alpha"
                  checkedIcon={dotCircleOAlpha}
                  uncheckedIcon={circleO}
                  onPress={tombolAlpha}
                  checked={checkAlpha}
                  containerStyle={styles.checkBox}
                  textStyle={{color: '#eaeaea'}}
                  uncheckedColor="white"
                />
              </View>
            )}
          </View>
        ) : (
          <View style={styles.containerCheckBox}>
            <Text style={styles.fontText}>Pilih Kehadiran Anda</Text>
            <CheckBox
              center
              title="Saya Hadir"
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
              title="Saya Sakit"
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
              title="Saya Izin"
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
              title="Saya Alpha"
              checkedIcon={dotCircleOAlpha}
              uncheckedIcon={circleO}
              onPress={tombolAlpha}
              checked={checkAlpha}
              containerStyle={styles.checkBox}
              textStyle={{color: '#eaeaea'}}
              uncheckedColor="white"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AbsenPersonal;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
  button: {width: '50%', alignSelf: 'center'},
  listKey: {width: '100%', marginTop: 20},
  textPeringatan: {margin: 20, color: '#eaeaea'},
  containerCheckBox: {
    width: '100%',
    alignItems: 'center',
  },
  checkBox: {
    width: '70%',
    backgroundColor: 'transparent',
  },
});
