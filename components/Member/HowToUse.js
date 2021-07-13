/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HowToUse = () => {
  // hooks react component

  // component
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.textJudul}>Sekilas Info</Text>
        {/* card-1 */}
        <View style={styles.containerCard1}>
          <View style={styles.card}>
            <View style={styles.cardSmallPDF}>
              <Icon name="pdffile1" color="#CC7274" size={30} />
            </View>
            <Text style={styles.textStyle} adjustsFontSizeToFit={true}>
              Hasil Akhir Berupa File PDF
            </Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardSmallGoole}>
              <Icon name="google" color="#CC7274" size={30} />
            </View>
            <Text adjustsFontSizeToFit={true} style={styles.textStyle}>
              Login Pake Gmail
            </Text>
          </View>
        </View>

        {/* card-2 form */}
        <View style={styles.containerCard2}>
          <View style={styles.card2}>
            <View style={styles.cardSmallForm}>
              <Icon name="form" color="#22B1B1" size={30} />
            </View>
            <Text style={styles.textStyle} adjustsFontSizeToFit={true}>
              Bisa absen manual juga Kok
            </Text>
          </View>
          <View style={styles.card2}>
            <View style={styles.cardSmallUI}>
              <Icon name="shake" color="#2F99D7" size={30} />
            </View>
            <Text style={styles.textStyle} adjustsFontSizeToFit={true}>
              UI Friendly
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HowToUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120F10',
    justifyContent: 'center',
    alignItems: 'center',
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
  textJudul: {color: 'white', fontSize: 20},
  containerCard1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '30%',
    width: '100%',
    alignItems: 'flex-end',
  },
  card: {
    borderLeftColor: '#CC7274',
    borderLeftWidth: 5,
    borderRadius: 20,
    width: '40%',
    height: '80%',
    backgroundColor: 'white',
    elevation: 5,
  },
  cardSmallPDF: {
    alignSelf: 'center',
    backgroundColor: '#E7D8D8',
    width: '50%',
    height: 70,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSmallGoole: {
    backgroundColor: '#E7D8D8',
    alignSelf: 'center',
    width: '50%',
    height: 70,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
  containerCard2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '30%',
    width: '100%',
    alignItems: 'center',
  },

  card2: {
    borderLeftColor: '#31CBD3',
    borderLeftWidth: 5,
    borderRadius: 20,
    width: '40%',
    height: '80%',
    backgroundColor: 'white',
    elevation: 5,
  },
  cardSmallForm: {
    backgroundColor: '#DFF3F2',
    alignSelf: 'center',
    width: '50%',
    height: 70,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSmallUI: {
    backgroundColor: '#CEEAF7',
    alignSelf: 'center',
    width: '50%',
    height: 70,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
