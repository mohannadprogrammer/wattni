import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

import {Cart ,Button }from '../../component'

import Screen from '../../HOC/Screen'
export default class index extends Component {
    render() {
        return (
            <Screen
                name="سلة المشتريات"
            >
                <View style={{padding:30 ,alignItems:"center" }}>
                    <Cart></Cart>
                    <Cart></Cart>
                    <Button name ="أضافة عناصر">
                    </Button>

                </View >
                
            </Screen>

        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({

})
