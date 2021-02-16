import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

class ImageReact extends Component{
    render(){
        let imagemSaudacao='https://w7.pngwing.com/pngs/992/181/png-transparent-graphy-welcome-text-photography-logo.png'
        return(
            <View style={styles.container}>
                <Image
                source={{uri:imagemSaudacao}}
                style={{width:this.props.largura, height:this.props.altura}}
                />
                <Text>
                    {this.props.nomeSaudacao}
                </Text>
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
  

export default ImageReact;