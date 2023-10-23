// Heading.tsx

import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import globals from '../../assets/constants/globals';

interface HeadingProps {
  type: 'h1' | 'h2' | 'h3';
  userStyle?: TextStyle; // Allow users to provide custom styles
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ type, userStyle, children }) => {
  const headingStyles = [
    styles.heading,
    styles[type], // Apply default heading type style
    userStyle, // Apply user's custom style if provided
  ];

  return <Text style={headingStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24, // Default font size
    fontWeight: 'bold', // Default font weight
    marginBottom: 10, // Default margin
    color:globals.headingColor
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24, // Customize font size for H2
  },
  h3: {
    fontSize: 20, // Customize font size for H3
  },
});

export default Heading;
