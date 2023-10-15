import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, ViewStyle } from 'react-native';

interface LogoHolderProps {
  logoSource: ImageSourcePropType;
  size?: number; // Optional size prop
  style?: ViewStyle; // Optional style prop
}

const LogoHolder: React.FC<LogoHolderProps> = ({ logoSource, size, style }) => {
  console.log(logoSource,"this should workd")
  const containerStyle = [styles.container, style];
  return (
    <View style={containerStyle}>
      <Image source={logoSource} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default LogoHolder;
