import React from 'react';
import { StyleSheet, View } from 'react-native';
import IMC from './components/12IMC/CalculadoraApp'

export default function App() {
  return (
    <View style={styles.container}>
      <IMC/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
