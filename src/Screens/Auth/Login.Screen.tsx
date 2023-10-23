import React, { useState } from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import { Formik, Field } from 'formik';
import AsyncStorage from "@react-native-async-storage/async-storage";
import BaseScreen from "../../HOC/base.Screen";
import LogoHolder from "../../Components/Media/LogoHolder";
import Heading from "../../Components/Text/Headings";
import PrimaryAuthButton from "../../Components/Button/PrimaryAuthButton";
import PasswordInput from "../../Components/Input/PasswordInput";
import AuthInput from "../../Components/Input/AuthInput";
import LoginValidationSchema from "../../utils/validation/LoginValidation";
import { loginService } from "../../Services/Auth/login.service";
import SecondaryAuthButton from "../../Components/Button/SecondaryAuthButton";
import {storeUserData,getUserData} from "../../utils/Async/saveRetriveAsync"




export default function LoginScreen() {
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")
  const onLogin = async (phoneNumber: string, password: string) => {
    setLoading(true)
    const response=await loginService(phoneNumber,password)
    if(response.success==true){
      await storeUserData(response.data)
      console.log("User Data is stored successfully")
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    else{
      setError(response.error||"There has been an error")
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    setLoading(false)
    setError("")
  };
  if(loading==true){
    return <Text>This is the Loading screen</Text>
  }
  if(error!=""){
    return <Text>This is the Error screen</Text>
  }
  return (
    <BaseScreen>
      <LogoHolder logoSource={require('../../assets/tabLogo.png')}/>
      <Heading type="h1" userStyle={{fontStyle:"italic"}}>Login</Heading>
      <Formik
        initialValues={{ phoneNumber:"", password: '', }}
        validationSchema={LoginValidationSchema}
        onSubmit={values =>onLogin(values.phoneNumber,values.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values,errors, touched }) => (
          <View style={styles.formContainer}>
            <AuthInput
              name={"phoneNumber"}
              placeholder={"Phone"}
              handleChange={handleChange("phoneNumber")}
              handleBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              keyboardType="phone-pad"
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
            <PasswordInput
              name="password"
              placeholder="Password"
              value={values.password}
              handleChange={handleChange("password")}
              handleBlur={handleBlur("password")}
              keyboardType="default"
              error={errors.password}
              touched={touched.password}
            />
            <PrimaryAuthButton text={"Submit"} onSubmit={handleSubmit}/>
            <SecondaryAuthButton text={"Register Now?"} onSubmit={()=>console.log("Register now")}/>
          </View>
        )}
      </Formik>
    </BaseScreen>
  )
}

const styles=StyleSheet.create({
  formContainer:{
    flex: 1,
    width:"100%",
  }
})