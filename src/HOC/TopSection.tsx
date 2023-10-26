import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign,Feather } from '@expo/vector-icons';

interface TopSectionProps{
  navigation:any,
  heading:String,
}
const TopSection = ({navigation,heading}:TopSectionProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <AntDesign name="left" size={32} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Feather name="more-vertical" size={32} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default TopSection

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
  },
  heading:{
    fontSize:24,
    fontWeight:"500",
  }
})