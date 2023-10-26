import React, { ReactNode } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

interface BaseScreenProps {
  children: ReactNode;
  scrollable?: boolean; // Add scrollable property
}

const BaseScreen = ({ children, scrollable = false }: BaseScreenProps) => {
  if (scrollable) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
});

export default BaseScreen;
