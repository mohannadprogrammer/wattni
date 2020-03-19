import React, { Component } from 'react'
import {
    Text
    , StyleSheet
    ,View
    ,ScrollView
    ,TouchableOpacity,
    Image,
} from 'react-native'

import Screen from '../../HOC/Screen'

import {
    MassageCard
} from '../../component'
export default class index extends Component {
    render() {
        const checked = true

        return (
            <Screen
                name="تفاصيل الطلب"
                callBack={() => {
                    this.props.navigation.navigate("chart");
                }}
            >
                <ScrollView style ={styles.body}>
                    <View style ={styles.wrapper}>

                    </View>
                </ScrollView>
            </Screen>
        )
    }
}
const colors = require('../../assest/colors')
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        height: '100%',
        width: '100%',
    },wrapper: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 25,
    },
})
