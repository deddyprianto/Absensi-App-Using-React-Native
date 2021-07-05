/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ListItem, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
const PageQuestion = () => {
  // use Hook
  const {dataLogin} = useSelector(state => state.loginReducer);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      title: 'Home Screen',
      headerStyle: {backgroundColor: '#3F8A83'},
      headerTintColor: 'white',
    });
  }, [navigation]);
  // variable

  // function

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.fontText}>
          Haloo,{dataLogin.displayName} Pilih Role Kamu
        </Text>
        <View>
          <ListItem bottomDivider containerStyle={styles.listKey}>
            <ListItem.Content>
              <ListItem.Title>{admin}</ListItem.Title>
            </ListItem.Content>
            <Button title={pilihAdmin} onPress={tombolAdmin} />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{admin}</ListItem.Title>
            </ListItem.Content>
            <Button title={pilihAnggota} onPress={tombolAnggota} />
          </ListItem>
        </View>
      </View>
    </View>
  );
};

export default PageQuestion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F8A83',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fontText: {fontSize: 20},
});
