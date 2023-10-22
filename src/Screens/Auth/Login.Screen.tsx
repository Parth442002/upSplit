import React from "react";
import { View,Text,StyleSheet } from "react-native";
import BaseScreen from "../../HOC/base.Screen";
import LogoHolder from "../../Components/Media/LogoHolder";
import Heading from "../../Components/Text/Headings";
import AuthInput from "../../Components/Input/AuthInput";
import PrimaryAuthButton from "../../Components/Button/PrimaryAuthButton";

export default function LoginScreen() {
  return (
    <BaseScreen>
      <LogoHolder logoSource={require('../../assets/tabLogo.png')}/>
      <Heading type="h1" userStyle={{fontStyle:"italic"}}>Sign Up Now</Heading>
      <View style={styles.formContainer}>
        <AuthInput/>
        <PrimaryAuthButton/>
      </View>
    </BaseScreen>
  )
}

const styles=StyleSheet.create({
  formContainer:{
    width:"100%",
  }
})