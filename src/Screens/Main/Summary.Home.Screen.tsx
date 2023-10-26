import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../HOC/base.Screen'
import TopSection from '../../HOC/TopSection'

interface SummaryHomeScreenProps{
  navigation:any,
}
const SummaryHomeScreen = ({navigation}:SummaryHomeScreenProps) => {
  return (
    <BaseScreen>
      <TopSection navigation={navigation} heading={"User Summary"}/>
    </BaseScreen>
  )
}

export default SummaryHomeScreen

const styles = StyleSheet.create({})