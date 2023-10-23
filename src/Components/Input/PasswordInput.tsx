import { View, Text ,TextInput,StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import globals from '../../assets/constants/globals';

interface PasswordInputProps {
  name: string;
  value: string;
  handleChange: (text: string) => void;
  handleBlur: (e:any) => void;
  keyboardType: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  placeholder: string;
  error: string | undefined;
  touched: boolean | undefined;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  value,
  handleChange,
  handleBlur,
  keyboardType,
  placeholder,
  error,
  touched,
}) => {
  const showError = error && touched;
  const [visible,setVisible]=useState(false)
  return(
    <View style={styles.inputContainer}>
      <View style={[styles.inputBox]}>
        <AntDesign
          name="lock"
          size={40}
          color={globals.primaryColor}
        />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
          autoCapitalize="none"
          secureTextEntry={!visible}
        />
        <TouchableOpacity
          onPressOut={()=>setVisible(!visible)}
          style={{}}
        >
          <AntDesign
            name={visible?"eye":"eyeo"}
            size={40}
            color={globals.primaryColor}
          />
        </TouchableOpacity>
      </View>
      {showError && <Text style={styles.errorMessage}>⚠️ {error}</Text>}
    </View>
  )
}

export default PasswordInput


const styles=StyleSheet.create({
  inputContainer:{
    flexDirection:"column",
    alignSelf:"center",
    justifyContent:"space-between",
    marginVertical:16,
    width:"95%",

  },
  inputBox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:8,
    backgroundColor:"white",
    paddingHorizontal:12,
    elevation: 5,
    width:"auto",
    //Border Settings
    borderBottomWidth:2,
    borderRightWidth:2,
    borderColor:globals.primaryColor,
    shadowColor: globals.primaryColor,
    borderTopWidth:1,
    borderLeftWidth:1,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  input:{
    fontSize:16,
    fontWeight:"bold",
    width:"63%",
    paddingLeft:0,
    right:8,
    backgroundColor:"white",
  },
  errorMessage: {
    color: globals.errorColor,
    marginTop:8,
    fontWeight:"600",
    fontSize: 16,
  },
})