import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../HOC/base.Screen'
import TopSection from '../../HOC/TopSection'

interface IndividualExpenseHomeScreenProps{
  navigation:any,
  route?:any,
}
const IndividualExpenseHomeScreen = ({navigation,route}:IndividualExpenseHomeScreenProps) => {
  const data=route.params.item;
  return (
    <BaseScreen>
      <TopSection navigation={navigation} heading={"Expense"}/>
      <Text>{JSON.stringify(data)}</Text>
    </BaseScreen>
  )
}

export default IndividualExpenseHomeScreen

const styles = StyleSheet.create({})

