import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Aluno as Curso} from './components/Cabeçalho'
import Aluno from './components/Aluno'
import Imagem from './components/Corpo'
import Disciplinas from './components/Disciplina'

export default function App() {
  return (
    <View style={styles.container}>
      <Curso nome='Design'/>
      <Aluno />
      <Imagem />
      <Disciplinas />
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
