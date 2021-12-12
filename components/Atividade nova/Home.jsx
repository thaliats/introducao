import React, { Component } from 'react'
import { Button, View } from 'react-native'
import Perfil from './Perfil'
import Resultado from './Resultado'
import Sobre from './Sobre'


export class Home extends Component {
    render() {
        return (
          <View>
              <Button title="Cadastro" onPress={()=>{Perfil}}></Button>

              <Button title="IMC" onPress={()=>{Resultado}}></Button>

              <Button title="Sobre" onPress={()=>{Sobre}}></Button>
          </View>
        )
    }
}

export default Home