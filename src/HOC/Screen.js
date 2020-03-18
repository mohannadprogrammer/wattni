import React, { Component } from 'react';
import { 
    View
    ,Image
    ,StyleSheet} from 'react-native';

import {Header }from '../component'


const Screen = ({name ,callBack ,...props}) => {
    
    return <View style={style.container}>
        <Header
            name ={name}
            // action ={()=>alert("what the fuck")}
            action ={callBack}
        />

        {props.children}

       
    </View>;
};

const colors = require('../assest/colors');
const style = StyleSheet.create({
    container :{
        flex:1,
    },
});
export default Screen;