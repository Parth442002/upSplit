import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SampleScreen from '../Screens/Sample.Screen';
import LoginScreen from '../Screens/Auth/Login.Screen';
import RegisterScreen from '../Screens/Auth/Register.Screen';

const Stack = createNativeStackNavigator();

function ParentNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
}

export default ParentNavigator

