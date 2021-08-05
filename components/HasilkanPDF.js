/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import firestore from '@react-native-firebase/firestore';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import RNFS from 'react-native-fs';

const HasilkanPDF = () => {
  const dataLogin = useSelector(state => state.appstate.dataLogin);
  const [datauser, setDatauser] = useState([]);
  const [namegroup, setNamegroup] = useState('');
  const [nameorganisasi, setNameOrganisasi] = useState('');
  const [namealamat, setNameAlamat] = useState('');
  const [namekota, setNameKota] = useState('');
  const tanggal = new Date();
  const tanggalHariIni = tanggal.toUTCString().slice(0, 10);

  // adb shell input keyevent 82
  useEffect(() => {
    firestore()
      .collection('server')
      .doc('Im3cRGiZmrQEyunsObeE')
      .collection(namegroup.length === 0 ? 'data' : namegroup)
      .onSnapshot(snapshot =>
        setDatauser(snapshot.docs.map(doc => doc.data())),
      );
  }, [namegroup]);
  // variable
  let no = 1;
  const generatePDF = async () => {
    // /data/user/0/com.absensipdf/cache/absensi3780613586806435873.pdf
    // android:requestLegacyExternalStorage="true"
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Izin kan membaca Document Dir Hp Anda',
        message: 'Butuh akses membaca  ke memori perangkat anda',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    const granted2 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Izin kan membaca Document Dir Hp Anda',
        message: 'butuh akses untuk menulis ke memori perangkat anda',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    let options = {
      html: `<html>
      <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <style>
              body {
                  font-family: calibri;
              }
      
              table,
              tr,
              td {
                  border: 1px solid #30BCC9;
                  border-collapse: collapse;
              }
      
              .page_break {
                  page-break-before: always;
              }
      
              .badge {
                  display: inline-block;
                  padding: 0.25em 0.4em;
                  font-size: 72%;
                  font-weight: 300;
                  line-height: 1;
                  text-align: center;
                  white-space: nowrap;
                  vertical-align: baseline;
                  border-radius: 0.25rem;
                  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              }
      
              .badge-pill {
                  padding-right: 0.6em;
                  padding-left: 0.6em;
                  border-radius: 10rem;
              }
      
              .badge-info {
                  color: #fff;
                  background-color: #30BCC9;
              }
      
              .white {
                  border-color: #fff !important;
              }
          </style>
      </head>  
      <body>
          <div style="width: 100%; text-align: center;">
              <h1 style="background-color: #30BCC9; color: #fff; padding: 20px;">${nameorganisasi}</h1>
              <h5 style="color: #30BCC9;">Alamat ${namealamat}</h5>
              <hr style="border-top: 2px solid #30BCC9;">
          </div>
          <h2 style="font-weight: bold;">Laporan Absensi ${namegroup} <sup class="badge badge-pill badge-info"
                  style="font-weight: 300 !important;">${tanggalHariIni}</sup></h2>
          <table cellpadding="5" style="width: 100%">
              <thead>
                  <tr style="text-align: center; background-color: #30BCC9; color: #fff;">
                      <td class="white">No</td>
                      <td class="white">Nama</td>
                      <td class="white">Status Kehadiran</td>
                  </tr>
              </thead>
              <tbody>
                ${datauser.map(data => {
                  return `
                  <tr style="text-align:center">
                          <td>${no++}</td>
                          <td>${data.nama}</td>
                          <td>${data.status}</td>
                          </tr>
                          `;
                })}
              </tbody>
          </table>
          <div style="text-align: right; margin-top: 25px; margin-right: 50px;">${namekota},${tanggalHariIni}</div>
          <div style="text-align: right; margin-top: 60px; margin-right: 50px;">Hormat Admin ${
            dataLogin?.displayName
          }</div>
      </body>
      </html>`,
      fileName: 'absensi',
    };
    let dataFile = await RNHTMLtoPDF.convert(options);
    setNamegroup('');
    setNameOrganisasi('');
    setNameAlamat('');
    setNameKota('');
    const sourceFilePath = dataFile.filePath;
    //  /data/user/0/com.absensipdf/cache/absensi5730333662424998520.pdf
    const fileName = 'absensi.pdf';
    let destinationFilePath = RNFS.DownloadDirectoryPath;
    // /storage/emulated/0/Download
    // error yg terjadi ketika file tidak mempunyai nama dan extensi file nya
    // Error: EISDIR: illegal operation on a directory, read '/storage/emulated/0/Download'
    destinationFilePath = `${destinationFilePath}/${fileName}`;
    console.log(destinationFilePath);
    if (
      granted === PermissionsAndroid.RESULTS.GRANTED &&
      granted2 === PermissionsAndroid.RESULTS.GRANTED
    ) {
      await RNFS.moveFile(sourceFilePath, destinationFilePath);
      alert('file tersimpan di Folder Download ');
    } else {
      alert('Accses ke telepon Di tolak');
    }
  };
  // SMP N 1 SUNGGAL
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <ScrollView style={styles.scroolView}>
          <Text style={styles.textButton}>Validasi Data</Text>
          <View style={styles.containerInput}>
            <TextInput
              value={namegroup}
              onChangeText={value => setNamegroup(value)}
              style={styles.input}
              placeholder="Wajib Masukkan Nama Grup!"
              keyboardType="default"
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={nameorganisasi}
              onChangeText={value => setNameOrganisasi(value)}
              style={styles.input}
              placeholder="Nama Organisasi,instansi,perusahaan,dll"
              keyboardType="default"
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={namealamat}
              onChangeText={value => setNameAlamat(value)}
              style={styles.input}
              placeholder="Alamat"
              keyboardType="default"
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={namekota}
              onChangeText={value => setNameKota(value)}
              style={styles.input}
              placeholder="Kota"
              keyboardType="default"
            />
          </View>
          <Button
            title="Hasilkan PDF"
            containerStyle={styles.buttonHasilkanPDF}
            type="outline"
            onPress={generatePDF}
          />
        </ScrollView>
      </View>
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
  scroolView: {marginTop: 80, width: '100%'},
  button: {width: '50%', margin: 20},
  containerInput: {
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    elevation: 10,
    alignSelf: 'center',
  },
  input: {height: 40, width: '85%'},
  textButton: {
    color: '#eaeaea',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonHasilkanPDF: {
    width: '50%',
    alignSelf: 'center',
  },
});
