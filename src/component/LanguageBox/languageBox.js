import React from 'react';
import { View ,StyleSheet
    ,Text
} from 'react-native';
import colors from '../../assest/colors'


const languageBox = () => {
    
    return <View style={style.container}>
            
            <View style={style.languageBox}>
                <Text style={style.text}>English</Text>
            </View>
            
            <View style={style.languageBox}>
                <Text style={style.text}>العربية</Text>
            </View>
            
        
    </View>;
};


const style = StyleSheet.create({
    container :{
        borderColor:"#0bb7b0",
        borderWidth:2,
        borderRadius:20,
        backgroundColor:"#fff",
        height:100,
        width:350,
        flex:0,
        flexDirection:"row",
        justifyContent:"space-between",
        // alignItems:"sp",
        padding:10
    },
    languageBox:{
        flex:1,
        // width:50,
        // height:80,
        borderColor:"#F7F7F2",
        borderWidth:2,
        borderRadius:5,
        padding:20
        // backgroundColor:""
    },
    text:{
        fontSize:22,
        color:"black",
        padding:3
    }
});
export default languageBox;