import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Main/Home.Screen';
import SummaryHomeScreen from '../Screens/Main/Summary.Home.Screen';
import ProfileHomeScreen from '../Screens/Main/Profile.Home.Screen';
import UserExpensesHomeScreen from '../Screens/Main/UserExpenses.Home.Screen';
import IndividualExpenseHomeScreen from '../Screens/Main/IndividualUserExpense.Home.Screen';


const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Summary' component={SummaryHomeScreen}/>
        <Stack.Screen name='Profile' component={ProfileHomeScreen}/>
        <Stack.Screen name='UserExpenses' component={UserExpensesHomeScreen}/>
        <Stack.Screen name='IndividualExpense' component={IndividualExpenseHomeScreen}/>
      </Stack.Navigator>
  );
}

export default HomeNavigator
