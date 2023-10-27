import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupsScreen from '../Screens/Main/Groups/Groups.Screen';
import IndividualGroupScreen from '../Screens/Main/Groups/IndividualGroup.Screen';



const Stack = createNativeStackNavigator();

function GroupNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='Groups'
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name='Groups' component={GroupsScreen}/>
        <Stack.Screen name='IndividualGroup' component={IndividualGroupScreen}/>
      </Stack.Navigator>
  );
}

export default GroupNavigator
