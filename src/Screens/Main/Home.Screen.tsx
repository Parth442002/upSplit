import React from 'react';
import BaseScreen from '../../HOC/base.Screen';
import TopBar from '../../Components/Screens/HomeScreen/TopBar';
import UserSummary from '../../Components/Screens/HomeScreen/userSummary';
import RecentExpenses from '../../Components/Screens/HomeScreen/RecentExpenses';
import FriendsSection from '../../Components/Screens/HomeScreen/FriendsSection';

interface HomeScreenProps{
  navigation:any
}
function HomeScreen({ navigation }:HomeScreenProps) {
  return (
    <BaseScreen scrollable>
    <TopBar navigation={navigation} />
    <UserSummary navigation={navigation}/>
    <RecentExpenses navigation={navigation}/>
    <FriendsSection navigation={navigation}/>
    </BaseScreen>
  );
}

export default HomeScreen;