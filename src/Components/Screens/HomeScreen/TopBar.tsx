import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useUserData } from '../../../Context/userDataContext'
interface TopBarProps{
  navigation:any,
}
const TopBar = ({navigation}:TopBarProps) => {
  const {userData,setUserData}=useUserData()
  if(! userData){
    return
  }
  return (
    <View style={styles.container}>
      <Text style={styles.salutation}>Hi {userData.username} !</Text>
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