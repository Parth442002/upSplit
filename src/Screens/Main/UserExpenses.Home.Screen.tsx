import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../HOC/base.Screen'
import TopSection from '../../HOC/TopSection'

interface UserExpensesScreenProps{
  navigation:any,
}
const UserExpensesHomeScreen = ({navigation}:UserExpensesScreenProps) => {
  return (
    <BaseScreen>
      <TopSection navigation={navigation} heading={" User Expenses"}/>
    </BaseScreen>
  )
}

export default UserExpensesHomeScreen

const styles = StyleSheet.create({})

