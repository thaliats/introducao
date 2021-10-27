import React,{Component} from 'react'
import {View,Text} from 'react-native'

class Disciplinas extends Component{
    render(){
        return(
            <View>
                <Text> {this.props.nome}</Text>
            </View>
        )
    }
}

export default class Cadeiras extends Component{
    render(){
        return(
            <View>
                <Disciplinas nome='Historia da arte' />
                <Disciplinas nome='IHC'/>
                <Disciplinas nome='Matematica' />
            </View>
        )
    }
}