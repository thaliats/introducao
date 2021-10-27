import React from 'react';
import {View,Text} from 'react-native'

const Aluno = (props) =>
    <View>
        <Text>Você está matriculado em {props.nome}, Thalia Silva.</Text>
    </View>

const Curso = (props) =>
    <View>
        <Text>Oi {props.nome}, Design digital.</Text>
    </View>

export {Aluno,Curso}