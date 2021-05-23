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
import {useDispatch} from 'react-redux';
import {actionSaveNameGroup} from '../actions/action';
import {useNavigation} from '@react-navigation/native';

const HomeAbsen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [namegroup, setNamegroup] = useState('');
  const [copy, setCopy] = useState(false);
  const buttonMakeGroup = () => {
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(namegroup);
    dispatch(actionSaveNameGroup(namegroup));
    navigation.navigate('Absen');
  };
  const copyToClipboard = () => {
    Clipboard.setString(namegroup);
    setCopy(true);
  };
  return (
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
        <TouchableOpacity onPress={copyToClipboard}>
          {copy ? (
            <Icon name="check" size={20} color="gray" />
          ) : (
            <Text style={styles.warnaCopy}>copy</Text>
          )}
        </TouchableOpacity>
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
  );
};

export default HomeAbsen;

const styles = StyleSheet.create({
  // container di atas Bottom NAV
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {width: '50%', margin: 10},
  warnaCopy: {color: 'gray', fontSize: 12, fontStyle: 'italic'},
});
