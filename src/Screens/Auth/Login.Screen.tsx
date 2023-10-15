import React from "react";
import { View,Text,StyleSheet } from "react-native";
import BaseScreen from "../../HOC/base.Screen";
import LogoHolder from "../../Components/Media/LogoHolder";
import Heading from "../../Components/Text/Headings";

export default function LoginScreen() {
  return (
    <BaseScreen>
      <LogoHolder logoSource={require('../../assets/tabLogo.png')}/>
      <Heading type="h1" userStyle={{fontStyle:"italic"}}>Sign Up Now</Heading>

    </BaseScreen>
  )
}
