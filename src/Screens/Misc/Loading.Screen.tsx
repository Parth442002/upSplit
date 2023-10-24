import { View, Text,StyleSheet, ImageSourcePropType } from 'react-native'
import React, { useEffect } from 'react'
import BaseScreen from '../../HOC/base.Screen'
import LottieView from 'lottie-react-native';

interface LoadingScreenProps{
  text?:string
}

const LoadingScreen = ({ text }: LoadingScreenProps) => {
  return (
    <BaseScreen>
    <LottieView
        autoPlay
        style={styles.lottie}
        source={require('../../assets/Lottie/Loading.json')}
      />
    <Text style={styles.text}>{text}</Text>
    </BaseScreen>
  );
}

export default LoadingScreen

const styles=StyleSheet.create({
  lottie:{
    height:500,
    width:500,
    marginTop:20,
  },
  text:{
    fontSize:32,
    fontWeight:"800",
    fontStyle:"italic",
    color:"white",
  }
})