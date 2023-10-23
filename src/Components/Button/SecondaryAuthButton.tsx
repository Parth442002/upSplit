import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globals from '../../assets/constants/globals'

interface SecondaryAuthButtonProps {
  text: string;
  onSubmit: () => void;
}

const SecondaryAuthButton: React.FC<SecondaryAuthButtonProps> = ({ text, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSubmit}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryAuthButton;

const styles = StyleSheet.create({
  container: {
    width:"95%",
    marginVertical:32,
    alignSelf:"center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 5,
    backgroundColor: globals.backgroundColor,
    borderColor: globals.headingColor,
    borderWidth:1,
    shadowColor: globals.headingColor,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  text:{
    fontSize:24,
    textAlign:"center",
    paddingVertical:8,
    color:globals.headingColor,
    fontWeight:"600",
    letterSpacing:.5,
  }
})