/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import firestore from '@react-native-firebase/firestore';

const HasilkanPDF = () => {
  const [datauser, setDatauser] = useState('');
  const [namegroup, setNamegroup] = useState('');
  // function hasil kan FILE PDF
  // MABAR STIKOM
  const generatePDF = async () => {
    const tanggal = new Date();
    const tanggalHariIni = tanggal.toString();
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(namegroup)
      .onSnapshot(snapshot =>
        setDatauser(snapshot.docs.map(doc => doc.data())),
      );
    console.log(datauser);
    // /data/user/0/com.absensipdf/cache/absensi3780613586806435873.pdf
    // android:requestLegacyExternalStorage="true"
    // let options = {
    //   html: `
    //   <h1>List ABSEN SMA PARDEDE</h1> <br>
    //   <p>Tanggal ${tanggalHariIni}</p>
    //     <table>
    //       <tr>Namaa</tr>
    //       <tr>Status Kehadiran</tr>
    //       <td>
    //       </td>
    //     </table>
    //   `,
    //   fileName: 'absensi',
    //   directory: 'Documents',
    // };
    // await RNHTMLtoPDF.convert(options);

    // alert('file PDF telah dihasilkan, selamat menikmati');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textButton}>Masukan nama GRUP ABSENSI ANDA</Text>
      <View style={styles.containerInput}>
        <TextInput
          value={namegroup}
          onChangeText={value => setNamegroup(value)}
          style={styles.input}
          placeholder="Masukkan Nama Grup Anda"
          keyboardType="default"
        />
      </View>
      <Text>Hasil kan FILE PDF</Text>
      <Button
        containerStyle={styles.button}
        onPress={generatePDF}
        title="Convert Absen To PDF"
      />
    </View>
  );
};

// let options = { html: html, fileName: name, directory: 'Documents', };
// to:
// let options = { html: html, fileName: name, };
// <application
// android:requestLegacyExternalStorage="true"
// >
export default HasilkanPDF;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {width: '50%', margin: 20},
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
});
