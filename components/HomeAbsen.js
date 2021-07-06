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
import {actionSaveNameGroup} from '../actions/action';
import {useNavigation} from '@react-navigation/native';

const HomeAbsen = () => {
  // useHook
  const navigation = useNavigation();
  const emailUser = useSelector(state => state.loginReducer);
  const {dataLogin} = emailUser;
  const dispatch = useDispatch();
  const [namegroup, setNamegroup] = useState('');
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  // function
  const buttonMakeGroup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (copy === false) {
      alert(
        `Gagal membuat grup, anda ${dataLogin.displayName} Belum meng-copy nama Grup. jika sudah share ke anggota`,
      );
    } else {
      firestore()
        .collection('server')
        .doc('Im3cRGiZmrQEyunsObeE')
        .collection(namegroup);
      dispatch(actionSaveNameGroup(namegroup));
      navigation.navigate('Absen');
    }
  };
  const copyToClipboard = () => {
    Clipboard.setString(namegroup);
    setCopy(true);
  };

  // component
  return (
    <View style={styles.container}>
      <Text style={styles.textButton}>Masukkan Nama Absen</Text>
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
      <Button
        onPress={buttonMakeGroup}
        title="Buat Grup Absen"
        containerStyle={styles.button}
        buttonStyle={styles.buttonStyl}
        loading={loading}
      />
    </View>
  );
};

export default HomeAbsen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
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
    alignItems: 'center',
  },
  input: {height: 40, marginLeft: 10, width: '85%'},
  warnaCopy: {color: 'gray', fontSize: 12, fontStyle: 'italic'},
  button: {
    margin: 20,
    width: '50%',
  },
});
