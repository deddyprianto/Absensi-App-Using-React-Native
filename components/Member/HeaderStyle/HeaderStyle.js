/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';

// components
const HeaderStyle = ({title, styleComponent}) => {
  return (
    <View styleComponent={styles.container}>
      <Text>{title}</Text>
      {/* <Image
        source={require('./images/List-PeopleImage.jpg')}
        style={styles.image}
      /> */}
    </View>
  );
};

export default HeaderStyle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 80,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  image: {
    borderRadius: 50,
  },
});
