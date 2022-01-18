import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class IMC extends Component {

    constructor(props){
        super(props)
        this.state={altura: null, peso: null, altInput: null, pesoInput: null}
    }

    acaoBotao=()=>{
        this.setState({altInput: this.state.altura, pesoInput: this.state.peso})
    }

    render(){        
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Calcule seu IMC</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite sua altura'
                    onChangeText={altura => this.setState({altura})}
                />
                
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite seu peso'
                    onChangeText={peso => this.setState({peso})}
                />

                <View style={styles.viewButton}>
                    <Button 
                        title='Ok'
                        onPress={() => this.props.navigation.navigate('Resultado', {
                            nome: this.state.altura,
                            idade: this.state.peso,
                        })}
                    />
                </View>
              
            </View>
        )
    }
}
