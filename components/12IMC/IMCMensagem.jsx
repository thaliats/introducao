import React from 'react'
import {Text} from 'react-native'

const mensagem = (props)=> {

    //console.log(props.IMC)
    if(props.IMC<= 17) {return <Text style={{fontSize:25, fontWeight:'bold', color:'red'}}>Muito Abaixo do Peso</Text>}
    else if(props.IMC<= 19) {return <Text style={{fontSize:25, fontWeight:'bold', color:'red'}}>Abaixo do Peso</Text>}
    else if(props.IMC>= 30) {return <Text style={{fontSize:25, fontWeight:'bold', color:'red'}}>Acima do Peso</Text>}
    else if(props.IMC>= 35) {return <Text style={{fontSize:25, fontWeight:'bold', color:'red'}}>Obesidade I</Text>}
    else if(props.IMC>= 35) {return <Text style={{fontSize:25, fontWeight:'bold', color:'red'}}>Obesidade II</Text>}
    else if(props.IMC>= 40) {return <Text style={{fontSize:25, fontWeight:'bold', color:'red'}}>Obesidade III</Text>}
    else if(props.IMC<= 25) {return <Text style={{fontSize:25, fontWeight:'bold'}}>Peso na Média</Text>}

    return <Text style={{fontSize:25, fontWeight:'bold'}}>Peso na Média</Text>
}

export default mensagem