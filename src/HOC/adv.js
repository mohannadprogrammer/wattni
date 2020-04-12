import React, { Component } from 'react';
import { 
    View
    ,Image
    ,StyleSheet
    ,ImageBackground
} from 'react-native';


const Adv = (props) => {
    
    return <ImageBackground
    source={require('../image/adv.png')}
    style={style.container}>
        <View style={{height:150,width:150}}  
            
           />
        
        {props.children}

        <Image style={{height:260,width:200}}  
            resizeMode="contain"
            source={require('../image/water.png')}
           />
    </ImageBackground>;
};

const colors = require('../assest/colors');
const style = StyleSheet.create({
    container :{
        backgroundColor:colors.background,
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
    },
});
export default Adv;