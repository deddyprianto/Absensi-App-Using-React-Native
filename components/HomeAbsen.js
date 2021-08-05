/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Clipboard from '@react-native-clipboard/clipboard';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {saveNameGroup} from '../features/appSlice';

const HomeAbsen = () => {
  // useHook
  const navigation = useNavigation();
  const {role} = useSelector(state => state.appstate.statusUser);
  const dispatch = useDispatch();
  const [namegroup, setNamegroup] = useState('');
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  // function
  const buttonMakeGroupAdmin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (copy === false) {
      alert(`Copy Nama Grup Terlebih dahulu`);
    } else {
      firestore()
        .collection('server')
        .doc('Im3cRGiZmrQEyunsObeE')
        .collection(namegroup);
      dispatch(saveNameGroup({name: namegroup}));
      navigation.navigate('Absen');
    }
    setNamegroup('');
  };
  const buttonAnggota = () => {
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(namegroup);
    dispatch(saveNameGroup({name: namegroup}));
    navigation.navigate('Absen');
    setNamegroup('');
  };
  const copyToClipboard = () => {
    Clipboard.setString(namegroup);
    setCopy(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.textButton}>Masukkan Nama Absen</Text>
        {/* pengkondisian untuk input admin & anggota */}
        {role === 'admin' ? (
          <View style={styles.containerInput}>
            <TextInput
              value={namegroup}
              onChangeText={value => setNamegroup(value)}
              style={styles.input}
              keyboardType="default"
            />
            <TouchableOpacity onPress={copyToClipboard}>
              {copy ? (
                <Icon name="check" size={20} color="green" />
              ) : (
                <Text style={styles.warnaCopy}>copy</Text>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.containerInput}>
            <TextInput
              value={namegroup}
              onChangeText={value => setNamegroup(value)}
              style={styles.input}
              keyboardType="default"
              placeholder="Minta nama Grup ke ADMIN"
            />
          </View>
        )}
        {/* pengkondisian untuk Tombol ADMIN & Tombol Anggota */}
        {role === 'admin' ? (
          <Button
            onPress={buttonMakeGroupAdmin}
            title="Buat Grup ABSEN"
            containerStyle={styles.button}
            loading={loading}
          />
        ) : (
          <Button
            onPress={buttonAnggota}
            title="Absen Sekarang"
            containerStyle={styles.button}
          />
        )}
      </View>
    </View>
  );
};

export default HomeAbsen;

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
  textButton: {
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  // khusus input dan tombol
  containerInput: {
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    elevation: 2,
  },
  input: {height: 40, marginLeft: 10, width: '85%'},
  warnaCopy: {color: 'gray', fontSize: 12, fontStyle: 'italic'},
  button: {
    margin: 20,
    width: '50%',
  },
});
