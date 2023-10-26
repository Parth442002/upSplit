import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../HOC/base.Screen'
import TopSection from '../../HOC/TopSection'

interface ProfileHomeScreenProps{
  navigation:any,
}
const ProfileHomeScreen = ({navigation}:ProfileHomeScreenProps) => {
  return (
    <BaseScreen>
      <TopSection navigation={navigation} heading={"Profile"}/>
    </BaseScreen>
  )
}

export default ProfileHomeScreen

const styles = StyleSheet.create({})

