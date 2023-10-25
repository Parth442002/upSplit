import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import BaseScreen from '../../HOC/base.Screen';
import LogoHolder from '../../Components/Media/LogoHolder';
import Heading from '../../Components/Text/Headings';
import PrimaryAuthButton from '../../Components/Button/PrimaryAuthButton';
import PasswordInput from '../../Components/Input/PasswordInput';
import AuthInput from '../../Components/Input/AuthInput';
import LoginValidationSchema from '../../utils/validation/LoginValidation';
import { loginService } from '../../Services/Auth/Auth.service';
import SecondaryAuthButton from '../../Components/Button/SecondaryAuthButton';
import { storeUserData } from '../../utils/Async/saveRetriveAsync';
import LoadingScreen from '../Misc/Loading.Screen';
import ErrorScreen from '../Misc/Error.Screen';

interface loginScreenProps{
  navigation:any
}
const LoginScreen = ({ navigation }:loginScreenProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onLogin = async (phoneNumber: string, password: string) => {
    setLoading(true);
    setError(false);

    const response = await loginService(phoneNumber, password);
    console.log(response)
    if (response.success) {
      await storeUserData(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      navigation.navigate("Main", {screen:"Home", userData: response.data });
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
        <LogoHolder logoSource={require('../../assets/tabLogo.png')} />
        <Heading type="h1" userStyle={{ fontStyle: 'italic' }}>
          Login
        </Heading>
        <Formik
          initialValues={{ phoneNumber: '', password: '' }}
          validationSchema={LoginValidationSchema}
          onSubmit={values => onLogin(values.phoneNumber, values.password)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.formContainer}>
              <AuthInput
                name={'phoneNumber'}
                placeholder={'Phone'}
                handleChange={handleChange('phoneNumber')}
                handleBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                keyboardType="phone-pad"
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
              />
              <PasswordInput
                name="password"
                placeholder="Password"
                value={values.password}
                handleChange={handleChange('password')}
                handleBlur={handleBlur('password')}
                keyboardType="default"
                error={errors.password}
                touched={touched.password}
              />
              <PrimaryAuthButton text={'Login'} onSubmit={handleSubmit} />
              <SecondaryAuthButton text={'Register Now'} onSubmit={() => navigation.navigate("Register")} />
            </View>
          )}
        </Formik>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  loadingContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
