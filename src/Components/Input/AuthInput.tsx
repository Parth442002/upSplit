import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import globals from '../../assets/constants/globals';

interface AuthInputProps {
  name: string;
  value: string;
  handleChange: (value: string) => void;
  handleBlur: (e: any) => void; // Update handleBlur definition
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  placeholder: string;
  error: string | undefined;
  touched: boolean | undefined;
}

const AuthInput: React.FC<AuthInputProps> = ({
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
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputBox}>
        <AntDesign name="mail" size={40} color={globals.primaryColor} />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          style={styles.input}
          placeholderTextColor="#a9a9a9"
          autoCapitalize="none"
        />
      </View>
      {showError && <Text style={styles.errorMessage}>⚠️ {error}</Text>}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginVertical: 16,
    width:"95%",
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    elevation: 5,
    width: 'auto',
    // Border Settings
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: globals.primaryColor,
    shadowColor: globals.primaryColor,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '75%',
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  errorMessage: {
    color: globals.errorColor,
    marginTop:8,
    fontWeight:"600",
    fontSize: 16,
  },
});
