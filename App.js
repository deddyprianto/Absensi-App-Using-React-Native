import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/Login';
import {Provider} from 'react-redux';
import AbsenPersonal from './components/AbsenPersonal';
import PageQuestion from './components/PageQuestion';
import AdminTabBottomNavigation from './components/Admin/AdminTabBottomNavigation';
import MemberTabBottomNavigation from './components/Member/MemberTabBottomNavigation';
import SplashScreen from './components/SplashScreen';
import {store} from './app/store';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PageQuestion"
            options={{headerShown: false}}
            component={PageQuestion}
          />
          <Stack.Screen name="admin" component={AdminTabBottomNavigation} />
          <Stack.Screen name="anggota" component={MemberTabBottomNavigation} />
          <Stack.Screen name="Absen" component={AbsenPersonal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
