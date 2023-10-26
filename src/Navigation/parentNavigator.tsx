import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import MainTabs from './MainNavigator';


const Stack = createNativeStackNavigator();

function ParentNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name='Auth' component={AuthNavigator}/>
        <Stack.Screen name='Main' component={MainTabs}/>
      </Stack.Navigator>
  );
}

export default ParentNavigator

