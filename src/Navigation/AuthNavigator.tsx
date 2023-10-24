import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Auth/Login.Screen';
import RegisterScreen from '../Screens/Auth/Register.Screen';
import LoggedInScreen from '../Screens/Auth/LoggedIn.Screen';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoggedIn" component={LoggedInScreen} />
      </Stack.Navigator>
  );
}

export default AuthNavigator