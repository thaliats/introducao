import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotaSuprema from './components/Atividade 5/Routes';

export default function App() {

    return (
      <SafeAreaProvider>
      <RotaSuprema></RotaSuprema>
      </SafeAreaProvider>
  );
}