import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../HOC/base.Screen'
import TopSection from '../../HOC/TopSection'

interface IndividualFriendScreenProps{
  navigation:any,
  route?:any,
}
const IndividualFriendScreen = ({navigation,route}:IndividualFriendScreenProps) => {
  const data=route.params;
  return (
    <BaseScreen>
      <TopSection navigation={navigation} heading={"Friend"}/>
      <Text>{JSON.stringify(data)}</Text>
    </BaseScreen>
  )
}

export default IndividualFriendScreen

const styles = StyleSheet.create({})

