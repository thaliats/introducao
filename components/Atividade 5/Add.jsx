import React, {useState} from 'react'
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../../node_modules/firebase/remote-config'


const Add = (props)=>{
    const initialState = {name: '', sobrenome:'', curso:'', ira:''}
    const [state, setState] = useState(initialState)
    
    const addNewUser = async ()=>{
        try {
            await firebase.db
            .collection('alunos')
            .add({name: state.name,
                sobrenome: state.sobrenome,
                curso: state.curso,
                ira: state.ira
            })
            props.navigation.navigate('Lista')
        }catch(error){
            console.log(error)
        }
    }

    const handleChangeText = (value, name)=>{
        setState({...state, [name]:value})
    }

    return(
    <ScrollView style={styles.container}>
        <View>
            <TextInput style={styles.textInput} placeholder='Nome' value={state.name} onChangeText={(value)=> handleChangeText(value, 'name')}/>
            <TextInput style={styles.textInput} placeholder='Sobrenome' value={state.sobrenome} onChangeText={(value)=> handleChangeText(value, 'sobrenome')}/>
            <TextInput style={styles.textInput} placeholder='Curso' value={state.curso} onChangeText={(value)=> handleChangeText(value, 'curso')}/>
            <TextInput style={styles.textInput} placeholder='IRA' value={state.ira} onChangeText={(value)=> handleChangeText(value, 'ira')}/>
        </View>
        <View style={{padding:5, backgroundColor: 'purple'}}>
            <Button onPress={()=> addNewUser()}title='Adicionar aluno' color='purple'></Button>
            </View>
    </ScrollView>
    )
}
export default Add