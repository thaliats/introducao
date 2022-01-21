import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, ScrollView, Button, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '../../node_modules/firebase/remote-config'

const Editar = (props)=>{
    
    const initialState = {id:'',name:'', sobrenome:'', curso:'', ira: ''}
    const [user, setUser] = useState(initialState)
    
    useEffect(
        ()=>{
            const id = props.route.params.userId
            getUserById(id)
        }, 
        []
    )
    const getUserById = async (id)=>{
        const dbR = firebase.db.collection('alunos').doc(id)
            const doc = await dbR.get()
            const userP = doc.data()
            setUser({...userP, id: doc.id})
    }
    const deleteUserById = async()=>{
        const dbR = firebase.db.collection('alunos').doc(props.route.params.userId)
        await dbR.delete()
        props.navigation.navigate('ListUserScreen')
    }
    const updateUser = async() =>{ 
        const userR = firebase.db.collection('alunos').doc(user.id)
        await userR.set({
            name: user.name,
            sobrenome: user.sobrenome,
            curso: user.curso,
            ira: user.ira
        })
        setUser(initialState)
        props.navigation.navigate('Lista')
    }
    const handleChangeText = (value, prop)=>{
        setUser({...user, [prop]:value})
    }
    return(
       <ScrollView style={styles.container}>
          <TextInput placeholder='Nome' style={styles.inputGroup} value={user.name} onChangeText={(value)=>handleChangeText(value,'name')}/>
           <TextInput placeholder='Sobrenome' style={styles.inputGroup} value={user.sobrenome}  onChangeText={(value)=>handleChangeText(value,'sobrenome')}/>
           <TextInput placeholder='Curso' style={styles.inputGroup} value={user.curso}  onChangeText={(value)=>handleChangeText(value,'curso')}/>
           <TextInput placeholder='IRA' style={styles.inputGroup} value={user.ira}  onChangeText={(value)=>handleChangeText(value,'ira')}/>
           
           <View><Button onPress={()=>updateUser()} title='Editar  Perfil'></Button>
            </View>
            <View><Button onPress={()=>deleteUserById()} title='Excluir aluno'></Button>
            </View>

       </ScrollView>
    )
}
export default Editar