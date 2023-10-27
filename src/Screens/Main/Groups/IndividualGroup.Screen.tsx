import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../../../HOC/base.Screen'

interface IndividualGroupScreenProps{
  navigation:any,
  route?:any,
}

export default function IndividualGroupScreen({navigation,route,}:IndividualGroupScreenProps) {
  const data=route.params
  return (
    <BaseScreen>
      <Text style={{fontSize:24,marginVertical:16}}>This is the individual Group Screen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({})