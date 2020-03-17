import React from 'react';
import {
    View, StyleSheet
    , Text
    , TouchableOpacity
} from 'react-native';

// import Icon from 'react-native-vector-icons'
import {
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon,
} from 'native-base';
const Cart = () => {

    return <View style={styles.container}>
        

    </View>;
};

const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container: {
        borderColor: colors.green_color,
        borderWidth: 2,
        backgroundColor: colors.box_backgroud,
        height: 130,
        width: 350,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        marginVertical:5,
        // alignItems:"sp",
        padding: 10
    },
   
});
export default Cart;