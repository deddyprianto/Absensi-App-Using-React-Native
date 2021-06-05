import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './store/store';
import AbsenPersonal from './components/AbsenPersonal';

const App = () => {
  const Stack = createStackNavigator();
  const globalOption = {
    headerStyle: {backgroundColor: '#131C21'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Absen" component={AbsenPersonal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
