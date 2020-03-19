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
import { RadioButton } from 'react-native-paper'
export default class index extends Component {
    render() {
        const checked = true

        return (
            <Screen
                name="دفع"
                callBack={() => {
                    this.props.navigation.navigate("chart");
                }}
            >
                <ScrollView>
                <View style={styles.body}>
                    <View style={styles.wrapper}>
                        <MassageCard
                            title=""
                            Operation
                        >


                            <View style={styles.details}> 
                                <Text style={styles.title}>تفاصيل الطلب </Text>
                                <Text style={styles.title}>قيمة الطلب</Text>
                                <Text style={styles.title}>رسوم التوصيل </Text>
                                <Text style={styles.title}>القيمة المضافة</Text>
                                <Text style={styles.title}>قيمة الخصم</Text>
                            </View>
                            <View style={styles.total}>

                            </View>
                        </MassageCard>
                        <MassageCard
                            style={{ margin: 20 }}
                            title="اتمام الطلب"
                        >
                            <View style={{ justifyContent: "flex-end" }}>
                                <Text>فضلاً اختار احدي  الوسائل التالية :</Text>
                            </View>
                            <TouchableOpacity onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }} style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', borderBottomColor: '#cccccc', borderBottomWidth: 1, width: '100%' }}>
                                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start' }}>
                                    <RadioButton
                                        color="green"
                                        uncheckedColor="#797979"
                                        value="mada"
                                        status={checked === 'mada' ? 'checked' : 'unchecked'}
                                    // onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }}
                                    />
                                    <Text style={{ fontFamily: 'ElMessiri-Regular', color: '#a3a3a3', fontSize: 14, marginRight: 5, marginTop: 10 }}>البطاقات الإئتمانية ( مدى )</Text>
                                </View>
                                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
                                    <Image resizeMode='contain' source={require('../../image/footer.png')}
                                        style={{ width: 60, height: 30, margin: 5 }} /></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }} style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', borderBottomColor: '#cccccc', borderBottomWidth: 1, width: '100%' }}>
                                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start' }}>
                                    <RadioButton
                                        color="green"
                                        uncheckedColor="#797979"
                                        value="mada"
                                        status={checked === 'mada' ? 'checked' : 'unchecked'}
                                    // onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }}
                                    />
                                    <Text style={{ fontFamily: 'ElMessiri-Regular', color: '#a3a3a3', fontSize: 14, marginRight: 5, marginTop: 10 }}>البطاقات الإئتمانية ( مدى )</Text>
                                </View>
                                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
                                    <Image resizeMode='contain' source={require('../../image/footer.png')}
                                        style={{ width: 60, height: 30, margin: 5 }} /></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }} style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', borderBottomColor: '#cccccc', borderBottomWidth: 1, width: '100%' }}>
                                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start' }}>
                                    <RadioButton
                                        color="green"
                                        uncheckedColor="#797979"
                                        value="mada"
                                        status={checked === 'mada' ? 'checked' : 'unchecked'}
                                    // onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }}
                                    />
                                    <Text style={{ fontFamily: 'ElMessiri-Regular', color: '#a3a3a3', fontSize: 14, marginRight: 5, marginTop: 10 }}>البطاقات الإئتمانية ( مدى )</Text>
                                </View>
                                <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
                                    <Image resizeMode='contain' source={require('../../image/footer.png')}
                                        style={{ width: 60, height: 30, margin: 5 }} /></View>
                            </TouchableOpacity>

                          

                        </MassageCard>
                    </View>

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
    },
    wrapper: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 25,
    },
    details:{
        flex:1,
        width :"100%",
        borderRightColor:colors.green_color,
        borderRightWidth:1,
        paddingRight:25
    },
    title:{
        color:colors.green_color2,
        fontSize :20,
        
    }
})
