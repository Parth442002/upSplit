import React, { ReactNode, useState } from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import BaseScreen from "../../HOC/base.Screen";


interface LoginScreenProps{
  navigation:any,
  route:any,
}
const LoggedInScreen = ({ route,navigation }: LoginScreenProps) => {
  return(
    <BaseScreen>
      <Text style={{color:"white"}}>{JSON.stringify(route.params.userData)}</Text>
    </BaseScreen>
  )
}

export default LoggedInScreen

const styles=StyleSheet.create({
  formContainer:{
    flex: 1,
    width:"100%",
  }
})