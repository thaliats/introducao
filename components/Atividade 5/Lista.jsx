import React, {useEffect, useState} from 'react'
import firebase from '../../node_modules/firebase/remote-config'
import { View, Text, Button } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const Lista = (props)=>{
    const [users, setUsers] = useState([])

    useEffect(
        function () {
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot) => {
                    const users = []
                    queryOnSnapshot.docs.forEach(
                        (doc) => {
                            const { name, sobrenome, curso, ira } = doc.data()
                            users.push({ id: doc.id, name, sobrenome, curso, ira })
                        }
                    )
                    setUsers(users)
                })},
        []) 

    return(
        <ScrollView>
            <View><Text>Todos os alunos</Text></View>
            <View>
            <Button onPress={()=>props.navigation.navigate('Add')} title='+ Novo Aluno' color='purple'></Button>
            </View>
            {
               users.map(
                   (user)=>{
                        return (
                            <ListItem
                                key={user.id}
                                bottomDivider
                                onPress={()=>props.navigation.navigate('Editar', {userId: user.id})}
                            >
                                <ListItem.Content>
                                    <ListItem.Title>{user.name} {user.sobrenome}</ListItem.Title>
                                    <ListItem.Subtitle>{user.curso}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron/>
                            </ListItem>
                        )}
               )}
        </ScrollView>
    )
}
export default Lista