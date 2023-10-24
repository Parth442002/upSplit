import React, { ReactNode, useState } from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import BaseScreen from "../../HOC/base.Screen";


interface LoginScreenProps{
  navigation:any
}
const LoggedInScreen = ({ navigation }: LoginScreenProps) => {
  console.log("This is the loggedIn Screen")
  return(
    <BaseScreen>
      <Text style={{color:"white"}}>{JSON.stringify(navigation.params)}</Text>
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