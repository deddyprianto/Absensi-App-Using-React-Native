/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {actionLogin} from '../actions/action';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  // useHook
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
  //
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
      <StatusBar backgroundColor="black" />
      <View style={styles.containerImg}>
        <ImageBackground
          style={styles.image}
          source={require('./img/key.jpg')}
        />
      </View>

      <View style={styles.main}>
        <Text style={styles.text}>Login Menggunakan Gmail</Text>
        <GoogleSigninButton
          style={styles.styleButtonGoole}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={buttonLogin}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerApp: {flex: 1, backgroundColor: '#050830'},
  containerImg: {
    height: '40%',
  },
  image: {flex: 1},
  main: {
    height: '70%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3545',
  },
  text: {marginBottom: 40, color: '#eaeaea'},
  styleButtonGoole: {width: 192, height: 48},
});
