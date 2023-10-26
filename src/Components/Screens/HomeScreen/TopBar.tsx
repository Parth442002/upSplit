import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

interface TopBarProps{
  navigation:any,
  _id: string;
  username:string,
}
const TopBar = ({navigation,_id,username}:TopBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.salutation}>Hi {username} !</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <FontAwesome5 name="user-circle" size={40} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  salutation:{
    fontSize:32,
    fontWeight:"600",
  }
})