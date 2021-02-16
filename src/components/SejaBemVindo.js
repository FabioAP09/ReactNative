import React,{Component} from 'react';
import {View,Text} from 'react-native';

class SejaBemVindo extends Component{
    render(){
        let saudacao;
        return(
            <View>
                <Text style={{color:'#0000FF', fontSize:30}} >{this.props.tipoSaudacao }</Text>
            </View>
        )
    }
}

export default SejaBemVindo;