import React,{Component} from 'react';
import {View,Button, Alert} from 'react-native';

class Buttons extends Component{
    render(){
        return(
            <View style={{width:500}}>
                <Button
                    onPress={()=>Alert.alert('Entrar')}
                    title="Entrar"
                    color="#0000FF"
                    accessibilityLabel="Pressione para Entrar"
                    
                />
                  
            </View>
        )
    }
}



export default Buttons;





















