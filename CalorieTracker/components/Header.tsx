import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header(props: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

// pick one of the palettes below in your StyleSheet:
const styles = StyleSheet.create({
  header: {

    height: 60,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    /* Example palette: Ocean Breeze */
    backgroundColor: '#F8F8F8',
    padding: 50
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
});