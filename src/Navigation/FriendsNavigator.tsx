import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Main/Home.Screen';
import SummaryHomeScreen from '../Screens/Main/Summary.Home.Screen';
import ProfileHomeScreen from '../Screens/Main/Profile.Home.Screen';
import UserExpensesHomeScreen from '../Screens/Main/UserExpenses.Home.Screen';
import IndividualExpenseHomeScreen from '../Screens/Main/IndividualUserExpense.Home.Screen';
import FriendsScreen from '../Screens/Main/Friends.Screen';
import IndividualFriendScreen from '../Screens/Main/IndividualFriend.Screen';


const Stack = createNativeStackNavigator();

function FriendsNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='Friends'
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name='Friends' component={FriendsScreen}/>
        <Stack.Screen name='IndividualFriend' component={IndividualFriendScreen}/>
      </Stack.Navigator>
);
}

export default FriendsNavigator
