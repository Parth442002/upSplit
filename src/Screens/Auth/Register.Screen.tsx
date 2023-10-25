import React,{useState} from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import { Formik, Field } from 'formik';

//Local Imports
import BaseScreen from "../../HOC/base.Screen";
import LogoHolder from "../../Components/Media/LogoHolder";
import Heading from "../../Components/Text/Headings";
import PrimaryAuthButton from "../../Components/Button/PrimaryAuthButton";
import SecondaryAuthButton from "../../Components/Button/SecondaryAuthButton";
import PasswordInput from "../../Components/Input/PasswordInput";
import AuthInput from "../../Components/Input/AuthInput";
import RegisterValidationSchema from "../../utils/validation/RegisterValidation";
import { storeUserData } from '../../utils/Async/saveRetriveAsync';
import LoadingScreen from "../Misc/Loading.Screen";
import ErrorScreen from "../Misc/Error.Screen";
import { RegisterService } from "../../Services/Auth/Auth.service";

interface RegisterScreenProps{
  navigation:any

}
export default function RegisterScreen({navigation}:RegisterScreenProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onRegister = async (username:string,phoneNumber: string, password: string) => {
    setLoading(true);
    setError(false);

    const response = await RegisterService(username,phoneNumber, password);
    console.log(response)
    if (response.success) {
      await storeUserData(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      navigation.navigate("LoggedIn", { userData: response.data });
    } else {
      setLoading(false)
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  if(error){
    return <ErrorScreen text="We encountered an Error"/>
  }
  if(loading){
    return <LoadingScreen text="Loading Please Wait....."/>
  }
  return (
    <BaseScreen>
      <LogoHolder logoSource={require('../../assets/tabLogo.png')}/>
      <Heading type="h1" userStyle={{fontStyle:"italic"}}>Register</Heading>
      <Formik
        initialValues={{ username: '',phoneNumber:"", password: '', }}
        validationSchema={RegisterValidationSchema}
        onSubmit={values =>onRegister(values.username,values.phoneNumber,values.password)}
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
            <PrimaryAuthButton text={"Regiser"} onSubmit={handleSubmit}/>
            <SecondaryAuthButton text={'Login'} onSubmit={() => navigation.navigate("Login")} />
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