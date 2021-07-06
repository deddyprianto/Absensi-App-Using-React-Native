/* eslint-disable prettier/prettier */
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderStyle from './HeaderStyle/HeaderStyle';

const HowToUse = () => {
  // hooks react component
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      header: ({scene}) => {
        const {options} = scene.descriptor;
        const title =
          options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;
        return (
          <HeaderStyle title={title} styleComponent={options.headerStyle} />
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Bagaimana cara menggunakan aplikasi ini</Text>
    </View>
  );
};

export default HowToUse;

const styles = StyleSheet.create({
  container: {flex: 1},
});
