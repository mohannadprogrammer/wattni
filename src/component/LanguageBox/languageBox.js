import React from 'react';
import {
    View, StyleSheet
    , Text, Image
} from 'react-native';
import colors from '../../assest/colors'


const languageBox = (props) => {

    return <View style={style.container}>

        <View style={style.languageBox}>
            <Text style={style.text}>English</Text>
            {/* <Image s={require('../../image/logo.png')}></Image> */}
        </View>

        <View style={style.languageBox}
            onTouchStart={props.callBack}
        >
            <Text style={style.text}>العربية</Text>
        </View>


    </View>;
};


const style = StyleSheet.create({
    container: {
        borderColor: "#0bb7b0",
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "#fff",
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    languageBox: {
        borderColor: "#F7F7F2",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        margin: 10
        // backgroundColor:""
    },
    text: {
        // fontSize:15,
        // fontSize:22,
        color: "black",
        // padding:3
    }
});
export default languageBox;