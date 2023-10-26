import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import BaseScreen from '../../HOC/base.Screen';
import { getUserData,UserDataType } from '../../utils/Async/saveRetriveAsync';
import ErrorScreen from '../Misc/Error.Screen';
import LoadingScreen from '../Misc/Loading.Screen';
import TopBar from '../../Components/Screens/HomeScreen/TopBar';
import UserSummary from '../../Components/Screens/HomeScreen/userSummary';
import RecentExpenses from '../../Components/Screens/HomeScreen/RecentExpenses';
import FriendsSection from '../../Components/Screens/HomeScreen/FriendsSection';

interface HomeScreenProps{
  navigation:any
}
function HomeScreen({ navigation }:HomeScreenProps) {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
        const { data, error } = await getUserData();
        console.log(data)
        if (error) {
          setError(error);
          navigation.navigate("Auth",{screen:"Login"})
        } else {
          setUserData(data);
        }
        setIsLoading(false)
    };
    fetchData();
  }, []);

  if (isLoading || userData==null) {
    return <LoadingScreen text="Loading please wait..."/>
  }

  if (error) {
    return <ErrorScreen text='Login Once Again'/>
  }
  return (
    <BaseScreen scrollable>
    <TopBar navigation={navigation} _id={userData._id} username={userData.username} />
    <UserSummary navigation={navigation} _id={userData._id} username={userData.username} />
    <RecentExpenses navigation={navigation} _id={userData._id} username={userData.username} />
    <FriendsSection navigation={navigation} _id={userData._id} username={userData.username} />

    </BaseScreen>
  );
}

export default HomeScreen;