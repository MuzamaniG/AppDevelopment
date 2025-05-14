import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// pick one of the palettes below in your StyleSheet:
const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: 'center',
    /* Example palette: Ocean Breeze */
    backgroundColor: '#0077B6',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});