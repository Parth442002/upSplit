import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

interface TopBarProps{
  navigation:any,
  _id: string;
  username:string,
}
const UserSummary = ({navigation,_id,username}:TopBarProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("HomeStack",{screen:"Summary"})}>
      <Text style={styles.myBalance}>My Balance</Text>
      <Text style={[styles.myBalance,styles.amount]}>{"\u20B9"} 1800</Text>
      <Text style={styles.summary}>View Summary</Text>
    </TouchableOpacity>
  )
}

export default UserSummary

const styles = StyleSheet.create({
  container:{
    width:"90%",
    marginTop:24,
    backgroundColor:"black",
    borderRadius:24,
    flexDirection:"column",
    justifyContent:"flex-start",
  },
  myBalance:{
    paddingLeft:24,
    marginTop:24,
    fontSize:20,
    color:"white",
    fontWeight:"600",
    letterSpacing:.5,
  },
  amount:{
    fontSize:48,
  },
  summary:{
    paddingHorizontal:24,
    paddingVertical:8,
    marginTop:24,
    fontSize:20,
    color:"white",
    backgroundColor:"red",
    borderRadius:24,
  }
})