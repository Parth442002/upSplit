import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';


const Stack = createNativeStackNavigator();

function ParentNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='Auth'
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name='Auth' component={AuthNavigator}/>
      </Stack.Navigator>
  );
}

export default ParentNavigator

