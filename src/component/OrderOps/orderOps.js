import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from "native-base"
function Operation() {
    return (
        <TouchableOpacity style={styles.delete}>
            <Text style={{ padding: 5, color: colors.box_backgroud, fontSize: 14 }}>إعادة الطلب</Text>

            <Icon name="cycle" type="Entypo" style={{ color: colors.box_backgroud, padding: 4, fontSize: 20 }} />
        </TouchableOpacity>
    )
}
function Title(title) {
    return (
        <View style={styles.position}>
            <Text style={{ padding: 5, color: colors.box_backgroud, fontSize: 14 }}>{title}</Text>
            <Icon style={{ color:colors.box_backgroud }} name="folder-multiple-outline" type="MaterialCommunityIcons"/>
        </View>
    )

}


export default class OrderOps extends Component {
    render() {
        return (
            <View style={styles.box}>
                {Title(this.props.title)}
                {this.props.children}
                {Operation(this.props.Operation)}
            </View>
        );
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    box: {
        flex: 1,
        borderWidth: 2,
        borderColor: colors.green_color2,
        padding: 40,
        // width: '100%',
        paddingTop: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'relative',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        margin: 10,
    },
    position: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'absolute',

        top: 0,
        left: 0,

        alignItems: "center",
        width: 120,
        height: 30,
        padding: 9,
        paddingVertical:25,
        backgroundColor: colors.green_color2,
        borderBottomRightRadius: 10,
    },
    delete: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        height: 40,
        width: 120,
        bottom: 0,
        left: 0,
        padding: 9,
        paddingVertical:5,
        alignItems: "center",
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 5,
        backgroundColor: colors.green_color2
    }
});
