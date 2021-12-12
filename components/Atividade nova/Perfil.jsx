import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'

export class Perfil extends Component {
    render() {
        return (
            <View>
                <Image source={{uri:'foto.png'}}></Image>
                <Text>Nome: jeff</Text>
                <Text>Idade: 20</Text>
                <Text>Curso: SI</Text>
                <Button title="HOME"></Button>
            </View> 
        )
    }
}

export default Perfil