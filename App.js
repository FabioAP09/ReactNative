import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageReact from './src/components/ImageReact';
import SejaBemVindo from './src/components/SejaBemVindo';
import Button from './src/components/Button';

class Saudacao extends Component{
  render(){
    let nome= 'Fábio';
    return(
      <View style={styles.container}>
        <SejaBemVindo tipoSaudacao='Olá! Seja Bem-Vindo!'/>
        <Text>Lorem ipsum is simply dummy text to the {nome}</Text>
        <ImageReact largura={500} altura={500} nomeSaudacao='Clique aqui para acessar'/>
        <Button />

      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    margin:30,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Saudacao;