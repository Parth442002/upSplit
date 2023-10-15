// BaseScreen.tsx

import React, { ReactNode } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

interface BaseScreenProps {
  children: ReactNode;
}

const BaseScreen = ({ children }: BaseScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // You can set the background color here
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    padding: 16, // You can customize the padding or other styles here
  },
});

export default BaseScreen;
