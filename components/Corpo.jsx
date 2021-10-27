import React from 'react'
import {View,Image} from 'react-native'

export default class Imagem extends React.Component{
    render(){

    let figura = {uri:'https://instagram.ffec10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/245092933_1357403901341771_8406794089849626732_n.jpg?_nc_ht=instagram.ffec10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=dazzaGAzaZYAX_16y8-&edm=AP_V10EBAAAA&ccb=7-4&oh=9b0a14f8659516e897b34ea6e89d0f6b&oe=61808506&_nc_sid=4f375e'}

        return(
            <Image
                source={this.props.figura} 
                style={{width:180,height:180}}/>
        )
    }
}