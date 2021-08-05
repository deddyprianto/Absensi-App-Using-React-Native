/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {CheckBox, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  saveNameGroup,
  actionStatusHadir,
  actionStatusSakit,
  actionStatusIzin,
  actionStatusAlpha,
} from '../features/appSlice';
const AbsenManually = () => {
  // hook
  const {keadaanHadir} = useSelector(state => state.appstate.keadaanHadir);
  const {keadaanSakit} = useSelector(state => state.appstate.keadaanSakit);
  const {keadaanIzin} = useSelector(state => state.appstate.keadaanIzin);
  const {keadaanAlpha} = useSelector(state => state.appstate.keadaanAlpha);

  const dispatch = useDispatch();
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

  useEffect(() => {
    let dataTimeOut;
    if (keadaanHadir) {
      dataTimeOut = setTimeout(() => {
        dispatch(actionStatusHadir({keadaanHadir: false}));
        setCheckHadir(false);
      }, 3000);
    }
    if (keadaanIzin) {
      dataTimeOut = setTimeout(() => {
        dispatch(actionStatusSakit({keadaanSakit: false}));
        setCheckSakit(false);
      }, 3000);
    }
    if (keadaanAlpha) {
      dataTimeOut = setTimeout(() => {
        dispatch(actionStatusSakit({keadaanSakit: false}));
        setCheckIzin(false);
      }, 3000);
    }
    if (keadaanSakit) {
      dataTimeOut = setTimeout(() => {
        dispatch(actionStatusSakit({keadaanSakit: false}));
        setCheckAlpha(false);
      }, 3000);
    }
    return () => {
      clearTimeout(dataTimeOut);
    };
  }, [keadaanHadir, keadaanSakit, keadaanIzin, keadaanAlpha]);
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
    dispatch(saveNameGroup(namegroup));
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
            : 'anda tidak memilih opsi status kehadiran',
      });
    setNamalengkap('');
    alert('berhasil, silahkan convert ke file PDF');
  };

  const tombolHadir = () => {
    setCheckHadir(true);
    dispatch(actionStatusHadir({keadaanHadir: true}));
    setHadir(statusHadir);
    setNamalengkap('');
  };
  const tombolSakit = () => {
    setCheckSakit(true);
    setSakit(statusSakit);
    setNamalengkap('');
  };
  const tombolIzin = () => {
    setCheckIzin(true);
    setIzin(statusIzin);
    setNamalengkap('');
  };
  const tombolAlpha = () => {
    setCheckAlpha(true);
    setAlpha(statusAlpha);
    setNamalengkap('');
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
                placeholder="Wajib! Masukkan Nama ABSEN"
                keyboardType="default"
              />
            </View>
            <Button
              onPress={buttonMakeGroup}
              title="Buat Absen"
              containerStyle={styles.button}
            />
          </>
        ) : (
          <View style={styles.containerList}>
            <ScrollView style={styles.scroolView}>
              <Text style={styles.fontText}>Nama ABSEN: {namegroup}</Text>
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
                <Text style={styles.fontText}>
                  Pilih Kehadiran Anggota Anda
                </Text>
                <View style={styles.kontainerCheckbox1}>
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
                </View>
                <View style={styles.kontainerCheckbox2}>
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
              </View>
              <Button
                iconRight={true}
                icon={<Icon name="paper-plane-o" size={15} color="#eaeaea" />}
                onPress={absenSekarang}
                title="Kirim Data"
                containerStyle={styles.button}
              />
            </ScrollView>
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
  fontText: {fontSize: 15, color: '#eaeaea', textAlign: 'center'},
  kontainerCheckbox1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  kontainerCheckbox2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  checkBox: {
    width: '40%',
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
  button: {width: '50%', margin: 10, alignSelf: 'center'},
  containerCheckBox: {
    width: '100%',
    alignItems: 'center',
  },
  itemCheckBox: {
    width: '70%',
    backgroundColor: 'transparent',
  },
  containerViewBottomSheet: {
    flex: 1,
  },
  bottomContainerStyle: {
    backgroundColor: 'gray',
  },
  scroolView: {
    marginTop: 50,
  },
});
