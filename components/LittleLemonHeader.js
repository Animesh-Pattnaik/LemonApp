import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    flex: 0.12
  },
  headerText: {
    padding: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});