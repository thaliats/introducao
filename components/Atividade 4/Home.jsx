import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export default class Home extends Component {

    render(){        
        return(
            <View style={styles.home}>
                <View style={styles.botoes}>
                    <Button
                        title="Cadastro"
                        onPress={() => this.props.navigation.navigate('Cadastro')}/>
                    <Button
                        title="IMC"
                        onPress={() => this.props.navigation.navigate('IMC')}/>
                    <Button
                        title="Sobre"
                        onPress={() => this.props.navigation.navigate('Sobre')}/>
                </View>
            </View>
        )
    }
}