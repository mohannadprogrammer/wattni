import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'

export default class offerBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../../image/offer.png")} resizeMode="stretch" style={{ height: 200, width: 400 }} />
                <View style={styles.text}>
                    <Text style={{
                        fontSize: 20, paddingVertical: 10,
                        color: colors.box_backgroud,
                    }}> صالح حتى تاريخ :{this.props.expiredData}</Text>
                </View>
            </View>
        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 2
    },
    text: {

        alignItems: "center",
        width: Dimensions.get("screen").width - 10,
        backgroundColor: colors.green_color2,
        fontSize: 30

    }

})
