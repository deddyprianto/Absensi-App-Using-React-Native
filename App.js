import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/Login';
import {Provider} from 'react-redux';
import store from './store/store';
import AbsenPersonal from './components/AbsenPersonal';
import PageQuestion from './components/PageQuestion';
import AdminTabBottomNavigation from './components/Admin/AdminTabBottomNavigation';
import MemberTabBottomNavigation from './components/Member/MemberTabBottomNavigation';
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
          <Stack.Screen name="PageQuestion" component={PageQuestion} />
          <Stack.Screen name="admin" component={AdminTabBottomNavigation} />
          <Stack.Screen name="anggota" component={MemberTabBottomNavigation} />
          <Stack.Screen name="Absen" component={AbsenPersonal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
