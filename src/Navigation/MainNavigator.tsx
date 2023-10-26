// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import SampleScreen from '../Screens/Sample.Screen';
import HomeScreen from '../Screens/Main/Home.Screen';
import HomeNavigator from './HomeNavigator';
import FriendsNavigator from './FriendsNavigator';

MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

type ScreenComponentProps = {
  route: any; // Adjust as per your route params
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={
      ({ route }): {
        tabBarIcon: React.FC<TabBarIconProps>;
      } => ({
        tabBarIcon: ({ focused, color, size }): React.ReactNode => {
          let iconName: string = '';

          if (route.name === 'HomeStack') {
            iconName = 'home';
          } else if (route.name === 'Groups') {
            iconName = 'account-group';
          } else if (route.name === 'Add Expense') {
            iconName = 'plus-circle';
          } else if (route.name === 'Notification') {
            iconName = 'bell';
          } else if (route.name === 'FriendsStack') {
            iconName = 'account';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeNavigator} options={{headerShown:false}} />
      <Tab.Screen name="Groups" component={SampleScreen} />
      <Tab.Screen
        name="Add Expense"
        component={SampleScreen}
        options={{
          tabBarBadge: 3, // Example: Show a badge on this tab
          tabBarBadgeStyle: { backgroundColor: 'red' },
          tabBarStyle: {
            backgroundColor: 'blue', // Background color for the tab
            elevation: 5, // Elevate the tab
          },
        }}
      />
      <Tab.Screen name="Notification" component={SampleScreen} options={{headerShown:false}} />
      <Tab.Screen name="FriendsStack" component={FriendsNavigator} options={{headerShown:false}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
