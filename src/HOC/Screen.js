import React, { Component } from 'react';
import { 
    View
    ,Image
    ,StyleSheet} from 'react-native';

import {Header }from '../component'


const Screen = (props) => {
    
    return <View style={style.container}>
        <Header
            name ={props.name}
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