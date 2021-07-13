/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
const HeaderStyle = ({title, myStyle}) => {
  // hooks
  const {dataLogin} = useSelector(state => state.loginReducer);
  const {userstatus} = useSelector(state => state.statusUser);
  const {role} = userstatus;
  return (
    <View style={styles.container}>
      <Text style={styles.textJudul}>{`Halaman ${title}`}</Text>
      <View style={styles.card}>
        <Avatar
          containerStyle={styles.avatar}
          size="large"
          rounded
          source={{
            uri: dataLogin.photoURL,
          }}
        />
        {role === 'admin' ? (
          <>
            <Text style={styles.text}>{`Nama: ${dataLogin.displayName}`}</Text>
            <Text style={styles.text}>Status: Admin</Text>
            <Text style={styles.textEmail}>{`Email: ${dataLogin.email}`}</Text>
          </>
        ) : (
          <>
            <Text style={styles.text}>{`Nama: ${dataLogin.displayName}`}</Text>
            <Text style={styles.text}>Status: Anggota</Text>
            <Text style={styles.textEmail}>{`Email: ${dataLogin.email}`}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default HeaderStyle;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#030E21',
    alignItems: 'center',
  },
  avatar: {position: 'absolute', alignSelf: 'center', top: -40, elevation: 20},
  card: {
    alignItems: 'center',
    position: 'absolute',
    bottom: -40,
    width: '70%',
    height: 100,
    borderRadius: 20,
    elevation: 50,
    backgroundColor: '#494960',
    justifyContent: 'flex-end',
  },
  textJudul: {color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 30},
  text: {
    color: 'white',
    fontSize: 13,
    alignSelf: 'center',
  },
  textEmail: {color: '#eaeaea', fontSize: 12, margin: 5},
  image: {width: 100, height: 100},
});
