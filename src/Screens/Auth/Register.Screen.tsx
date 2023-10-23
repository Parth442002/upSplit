import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import { Formik, Field } from 'formik';

//Local Imports
import BaseScreen from "../../HOC/base.Screen";
import LogoHolder from "../../Components/Media/LogoHolder";
import Heading from "../../Components/Text/Headings";
import PrimaryAuthButton from "../../Components/Button/PrimaryAuthButton";
import PasswordInput from "../../Components/Input/PasswordInput";
import AuthInput from "../../Components/Input/AuthInput";
import RegisterValidationSchema from "../../utils/validation/RegisterValidation";

export default function RegisterScreen() {
  return (
    <BaseScreen>
      <LogoHolder logoSource={require('../../assets/tabLogo.png')}/>
      <Heading type="h1" userStyle={{fontStyle:"italic"}}>Register</Heading>
      <Formik
        initialValues={{ username: '',phone:"", password: '', }}
        validationSchema={RegisterValidationSchema}
        onSubmit={values =>console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values,errors, touched }) => (
          <View style={styles.formContainer}>
            <AuthInput
              name={"username"}
              placeholder={"Username"}
              handleChange={handleChange("username")}
              handleBlur={handleBlur("username")}
              value={values.username}
              keyboardType={"default"}
              error={errors.username}
              touched={touched.username}
            />
            <AuthInput
              name={"phone"}
              placeholder={"Phone"}
              handleChange={handleChange("phone")}
              handleBlur={handleBlur("phone")}
              value={values.phone}
              keyboardType="phone-pad"
              error={errors.phone}
              touched={touched.phone}
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