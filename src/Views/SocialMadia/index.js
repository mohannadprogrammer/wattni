import React, { Component } from 'react';
import { View, Text, ToolbarAndroid ,StyleSheet} from 'react-native';
import colors from '../../assest/colors'

import Adv from '../../HOC/adv'
const SocialMedia = (props) => {
    
    return <Adv>

        <Text style={style.en}>WWW.Watani.sa</Text>
        <Text style={style.en}>@Watani</Text>
        <Text style={style.ar}>حياة و تقاء </Text>
    </Adv>;
};

// const colors = require('../../assest/colors');
const style = StyleSheet.create({
    
    en:{
        color:"#25a96f",
        fontSize:20

    },
    ar:{
        color:"#25a96f",
        fontSize:30
    }
});
export default SocialMedia;