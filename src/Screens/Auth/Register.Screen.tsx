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
        initialValues={{ identifier: 'Parth', password: '',confirmPassword:"" }}
        validationSchema={RegisterValidationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values,errors, touched }) => (
          <View style={styles.formContainer}>
            <AuthInput
              name={"identifier"}
              placeholder={"Email/Phone"}
              handleChange={handleChange("identifier")}
              handleBlur={handleBlur("identifier")}
              value={values.identifier}
              keyboardType={"default"}
              error={errors.identifier}
              touched={touched.identifier}
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
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              handleChange={handleChange("confirmPassword")}
              handleBlur={handleBlur("confirmPassword")}
              keyboardType="default"
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
            <Button title="Submit" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </BaseScreen>
  )
}

const styles=StyleSheet.create({
  formContainer:{
    width:"100%",
  }
})