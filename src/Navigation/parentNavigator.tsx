import React,{useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import MainTabs from './MainNavigator';
import { useUserData } from '../Context/userDataContext'

const Stack = createNativeStackNavigator();

function ParentNavigator() {
  const { userData, setUserData } = useUserData();
  useEffect(() => {
    // Save the user data to the context
    setUserData({
      __v: 0,
      _id: '651b9caa04e47059fdd962ca',
      password: '$2b$10$CqtKWO1p5xQEmwwSAIIFxuayZzTtx0am046Stvw0xxmsHF9XDBSm.',
      phoneNumber: '9026971112',
      token: 'your-token',
      username: 'User1',
    });
  }, []);
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

