import React from "react";
import { NavigationContainer } from "../../node_modules/@react-navigation/stack";
import {createStackNavigator} from '../../node_modules/@react-navigation/stack/src/navigators/createStackNavigator';
import Lista from "./Lista";
import Editar from "./Editar";
import Add from "./Add";

const MainStack = createStackNavigator()

function RotaSuprema() {
    return(
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Lista">
                <MainStack.Screen name='Add' component={Add} options={{title:'Add aluno'}} >
                </MainStack.Screen>
                <MainStack.Screen name='Listar' component={Lista} options={{title:'Listar alunos'}} >
                </MainStack.Screen>
                <MainStack.Screen name='Editar' component={Editar} options={{title:'Perfil'}} >
                </MainStack.Screen>
            </MainStack.Navigator>

        </NavigationContainer>
    )
}

export default RotaSuprema