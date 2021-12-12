import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'

export class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            idade: 0,
            email:"",
        }
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Nome" ></TextInput> 
                <TextInput placeholder="Idade" ></TextInput>
                <TextInput placeholder="E-mail" ></TextInput>

                <Button title="OK" ></Button>
            </View>
        )
    }
}

export default Cadastro