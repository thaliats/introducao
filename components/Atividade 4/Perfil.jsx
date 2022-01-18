import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Foto from '.../Pato-2.jpg';

export default class Perfil extends Component {

    render(){  
        const { navigation } = this.props;
        console.log(navigation)
        
        return(
            <View>
                <Image style={styles.foto} source={Foto} />
                <Text style={styles.titulo}>Nome: <Text style={styles.texto}>{navigation.state.params.nome}</Text></Text>
                <Text style={styles.titulo}>Idade: <Text style={styles.texto}>{navigation.state.params.idade}</Text></Text>
                <Text style={styles.titulo}>E-mail: <Text style={styles.texto}>{navigation.state.params.email}</Text></Text>
                <View style={styles.homeButton}>
                    <Button
                        title="Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>
                
            </View>
        )
    }
}
