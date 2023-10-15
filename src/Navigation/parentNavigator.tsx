import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SampleScreen from '../Screens/Sample.Screen';
import LoginScreen from '../Screens/Auth/Login.Screen';

const Stack = createNativeStackNavigator();

function ParentNavigator() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
}

export default ParentNavigator

