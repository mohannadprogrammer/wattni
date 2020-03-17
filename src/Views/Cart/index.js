import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

import {Cart }from '../../component'

import Screen from '../../HOC/Screen'
export default class index extends Component {
    render() {
        return (
            <Screen
                name="سلة المشتريات"
            >
                <View style={{padding:30}}>
                    <Cart></Cart>
                </View>
                
            </Screen>

        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({

})
