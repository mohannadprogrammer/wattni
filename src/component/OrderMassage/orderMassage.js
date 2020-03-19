import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from "native-base"

function Title(title) {
    return (
        <View style={styles.position}>
            <Text style={{ color: colors.box_backgroud, fontSize: 20 }}>{title}</Text>
        </View>
    )

}


export default class OrderMassage extends Component {
    render() {
        return (
            <View style={styles.box}>
                {Title(this.props.title, this.props.Operation)}
                {this.props.children}
            </View>
        );
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    box: {
        flex: 1,
        borderWidth: 2,
        borderColor: colors.green_color,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    position: {
        flex: 1,
        alignItems: "center",
        height: 30,
        top:0,
        left:0,
        right:0,
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: colors.green_color2,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    }
});
