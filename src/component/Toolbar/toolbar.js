import React, { Component } from 'react';
import { View, Text, ToolbarAndroid ,StyleSheet} from 'react-native';
import colors from '../../assest/colors'


const toolbar = () => {
    
    return <View style={style.container}>
        
        
    </View>;
};


const style = StyleSheet.create({
    container :{
        backgroundColor:colors.background,
        flex:1,
        justifyContent:"flex-start",
        alignItems: 'flex-start',
        paddingLeft:90
    },
});
export default toolbar;