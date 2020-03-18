import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'

import {Cart ,Button ,Dilervary }from '../../component'

import Screen from '../../HOC/Screen'
export default class index extends Component {
    render() {
        return (
            <Screen
                name="سلة المشتريات"
            >
                <ScrollView>
                <View style={{padding:30 ,alignItems:"center" }}>
                    <Cart></Cart>
                    <Cart></Cart>
                    <Button name ="أضافة عناصر">
                    </Button>

                    <Dilervary></Dilervary>
                    <Button
                        onClick={()=>this.props.navigation.navigate("regist")}
                        name ="تنفيز الطلب">
                    </Button>

                </View>
                </ScrollView>
            </Screen>

        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({

})
