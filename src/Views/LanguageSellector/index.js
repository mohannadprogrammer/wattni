import React, { Component } from 'react';
import {  Text ,StyleSheet} from 'react-native';


//import my component 
import {
    LanguageBox
}from '../../component'

import Adv from '../../HOC/adv'
const LanguageSellector = (props) => {
    
    return <Adv>

        <Text style={style.en}>اختار اللغة المناسبة لك لاستعمال التطبيق , كما يمكنك تغير اللغة لاحقا من الخيارات داخل التطبيق</Text>
        <LanguageBox
         callBack ={()=>{props.navigation.navigate("slider")}}/>
        <Text style={style.ar}>حياة و تقاء </Text>
    </Adv>;
};

// const colors = require('../../assest/colors');
const style = StyleSheet.create({
    
    en:{
        color:"#a8a8a8",
        fontSize:15,
        margin:20

    },
    ar:{
        color:"#25a96f",
        fontSize:30
    }
});
export default LanguageSellector;