/* eslint-disable prettier/prettier */
import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {actionLogin} from '../actions/action';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  // useHook
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      title: 'Halaman Login Screen',
    });
  }, [navigation]);
  useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return unsubscriber;
  }, []);

  // function
  function onAuthStateChanged(stateuser) {
    if (stateuser != null) {
      dispatch(actionLogin(stateuser));
      navigation.replace('PageQuestion');
    }
  }
  const buttonLogin = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          '131749259265-14tbcpaaidjkeh7ql256gfe2vnh71re4.apps.googleusercontent.com',
      });
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.containerApp}>
      <View style={styles.text}>
        <Text>Selamat datang di Aplikasi Absensi</Text>
      </View>
      <GoogleSigninButton
        style={styles.styleButtonGoole}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={buttonLogin}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerApp: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {marginBottom: 40},
  styleButtonGoole: {width: 192, height: 48},
});
