import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'
import Resultado from './Resultado'

export class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            altura: 0,
            peso: 0
        }
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Altura"></TextInput>
                <TextInput placeholder="Peso"></TextInput>

                <Button title="CALCULAR" onPress={()=>{this.props.navigation.Resultado}}></Button>
            </View>
        )
    }
}

export default IMC