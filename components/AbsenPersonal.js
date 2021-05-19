/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {Image, ListItem, Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const AbsenPersonal = () => {
  const dataGroupName = useSelector(state => state.nameGroup);
  const {group} = dataGroupName;
  const emailUser = useSelector(state => state.loginReducer);
  const {dataLogin} = emailUser;
  const [changetoicon, setChangetoicon] = useState('Pilih');
  const [show, setShow] = useState(false);
  const [grup, setGrup] = useState('');
  const [hadir, setHadir] = useState('Hadir');
  const [sakit, setSakit] = useState('Sakit');
  const [alpha, setAlpha] = useState('Alpha');
  const [izin, setIzin] = useState('Izin');
  // CEK KEADAAN USER MASUKKAN NAMA GRUP APA TIDAK
  const checkNameGrup = () => {
    if (grup == group) {
      alert(`Selamat datang di grup ${group}`);
      setShow(true);
    } else {
      alert(`Nama Grup Tidak Cocok!`);
      setShow(false);
    }
  };
  const tombolHadir = () => {
    setChangetoicon('Sudah');
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(group)
      .add({nama: dataLogin.displayName, status: hadir});
  };
  const tombolSakit = () => {
    setChangetoicon('Sudah');
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(group)
      .add({nama: dataLogin.displayName, status: sakit});
  };
  const tombolAlpha = () => {
    setChangetoicon('Sudah');
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(group)
      .add({nama: dataLogin.displayName, status: alpha});
  };
  const tombolIzin = () => {
    setChangetoicon('Sudah');
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(group)
      .add({nama: dataLogin.displayName, status: izin});
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://assets-a1.kompasiana.com/statics/crawl/55740ec40423bdb8468b4567.jpeg',
        }}
        style={{width: 200, height: 200}}
        PlaceholderContent={<ActivityIndicator />}
      />
      {!group ? (
        <View>
          <View style={styles.containerInput}>
            <TextInput
              value={grup}
              onChangeText={value => setGrup(value)}
              style={styles.input}
              placeholder="Masukkan Nama Grup"
              keyboardType="default"
            />
          </View>
          <Button title="Check" containerStyle={styles.button} />
          {show && (
            <View>
              <Text style={styles.fontText}>Pilih Status Kehadiran Anda</Text>
              <View>
                <ListItem bottomDivider containerStyle={styles.listKey}>
                  <ListItem.Content>
                    <ListItem.Title>{hadir}</ListItem.Title>
                  </ListItem.Content>
                  <Button title={changetoicon} onPress={tombolHadir} />
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{sakit}</ListItem.Title>
                  </ListItem.Content>
                  <Button title={changetoicon} onPress={tombolSakit} />
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{izin}</ListItem.Title>
                  </ListItem.Content>
                  <Button title={changetoicon} onPress={tombolIzin} />
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{alpha}</ListItem.Title>
                  </ListItem.Content>
                  <Button title={changetoicon} onPress={tombolAlpha} />
                </ListItem>
              </View>
            </View>
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.fontText}>Pilih Status Kehadiran Anda</Text>
          <View>
            <ListItem bottomDivider containerStyle={styles.listKey}>
              <ListItem.Content>
                <ListItem.Title>{hadir}</ListItem.Title>
              </ListItem.Content>
              <Button title={changetoicon} onPress={tombolHadir} />
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{sakit}</ListItem.Title>
              </ListItem.Content>
              <Button title="pilih" onPress={tombolSakit} />
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{izin}</ListItem.Title>
              </ListItem.Content>
              <Button title="pilih" onPress={tombolIzin} />
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{alpha}</ListItem.Title>
              </ListItem.Content>
              <Button title="pilih" onPress={tombolAlpha} />
            </ListItem>
          </View>
        </View>
      )}
    </View>
  );
};

export default AbsenPersonal;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  fontText: {fontSize: 20},
  colorHadirCheckBox: {
    color: 'green',
  },
  colorSakitCheckBox: {
    color: 'yellow',
  },
  colorAlphaCheckBox: {
    color: 'red',
  },
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
});