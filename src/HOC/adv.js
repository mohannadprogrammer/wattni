import React, { Component } from 'react';
import { 
    View
    ,Image
    ,StyleSheet} from 'react-native';


const Adv = (props) => {
    
    return <View style={style.container}>
        <Image style={{height:150,width:150}}  
            source={require('../image/logo.png')}
           />

        {props.children}

        <Image style={{height:260,width:200}}  
            resizeMode="contain"
            source={require('../image/water.png')}
           />
    </View>;
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