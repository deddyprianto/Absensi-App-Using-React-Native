/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const HasilkanPDF = () => {
  const namaAbs = useSelector(state => state.nameAbsen);
  const [datauser, setDatauser] = useState('');
  const {path} = namaAbs;

  const generatePDF = async () => {
    const tanggal = new Date();
    const tanggalHariIni = tanggal.toString();
    // firestore()
    //   .collection('server')
    //   .doc('Im3cRGiZmrQEyunsObeE')
    //   .collection(path)
    //   .get(snapshot => setDatauser(snapshot.docs.map(doc => doc.data())));
    let options = {
      html: `
      <h1>List ABSEN SMA MARKUS</h1> <br>
      <p>Tanggal ${tanggalHariIni}</p>
        <table>
          <tr>Namaa</tr>
          <tr>Status Kehadiran</tr>
          <td>
          </td>
        </table>
      `,
      fileName: 'absensi',
    };
    let file = await RNHTMLtoPDF.convert(options);
    alert(file.filePath);
  };

  return (
    <View style={styles.container}>
      <Text>Hasil kan FILE PDF</Text>
      <Button
        containerStyle={styles.button}
        onPress={generatePDF}
        title="Convert Absen To PDF"
      />
      <Button
        containerStyle={styles.button}
        onPress={generatePDF}
        title="Lihat PDF"
        type="outline"
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
});
