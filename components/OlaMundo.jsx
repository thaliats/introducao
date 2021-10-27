import React, {Component} from 'react'
import {Text,View} from 'react-native'

class OlaMundo extends Component{
    render(){
      //aqui dentro vai ficar o código JSX
      return (
          <View>
               <Text style={{fontWeight:'bold'}}>
                  23 anos
              </Text>
              <Text style={{fontWeight:'bold'}}>
                  Santo Estevão
              </Text>
              <Text style={{fontWeight:'bold'}}>
                  Design Digital
              </Text>
          </View>
      )  
    }
}

export default OlaMundo