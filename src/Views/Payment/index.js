import React, { Component } from 'react'
import {
    Text
    , StyleSheet
    , View
    , ScrollView
    , TouchableOpacity,
    Image,
} from 'react-native'

import Screen from '../../HOC/Screen'

import {
    MassageCard
} from '../../component'
import { RadioButton } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'
const orderInfo = (item, index, separator) => {

    return <View style={{ flex: 1, flexDirection: "row-reverse", marginBottom: 5 }}>

        <Text style={{ flex: 1, borderLeftColor: colors.green_color, borderLeftWidth: 1, color: colors.green_color, }}>مياة وطني 200 مل </Text>
        <Text style={{ flex: 1, color: colors.green_color2, marginRight: 10 }}>10 كراتين</Text>
    </View>;
};
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
                                    <View>
                                        <Text style={styles.title}>تفاصيل الطلب </Text>
                                        <FlatList
                                            style={{ flex: 1 }}
                                            data={[
                                                { key: 1 },
                                                { key: 2 }

                                            ]}
                                            renderItem={(item, index, separator) => orderInfo(item, index, separator)}
                                        />

                                    </View>
                                    <View>
                                        <Text style={styles.title}>قيمة الطلب</Text>
                                        <Text style={styles.priceNum}> 300.00 <Text style={styles.currancy}> ر.س</Text></Text>

                                    </View>
                                    <View>
                                        <Text style={styles.title}>رسوم التوصيل </Text>
                                        <Text style={styles.priceNum}> 16.0 <Text style={styles.currancy}> ر.س</Text></Text>

                                    </View>
                                    <View>
                                        <Text style={styles.title}>القيمة المضافة</Text>
                                        <Text style={styles.priceNum}> 5.8 <Text style={styles.currancy}> ر.س</Text></Text>

                                    </View>
                                    <View>
                                        <Text style={styles.title}>قيمة الخصم</Text>
                                        <Text style={styles.priceNum}> 20.00 <Text style={styles.currancy}> ر.س</Text></Text>

                                    </View>

                                </View>
                                <View style={styles.total}>
                                    <Text style={{ fontSize: 25, color: colors.green_color }}>الاجمالي</Text>
                                    <View style={{
                                          borderColor:colors.green_color,
                                          borderRadius: 15,
                                          borderWidth:1,
                                          padding:5,
                                          marginRight:15
                                        // backgroundColor:"red"
                                         }}>
                                        <Text style={{ fontSize: 25, color: colors.gray }} >395.00 <Text style={styles.currancy}>ر.س</Text></Text>

                                    </View>
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
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 25,
    },
    details: {
        flex: 1,
        width: "100%",
        borderRightColor: colors.green_color,
        borderRightWidth: 1,
        paddingRight: 25
    },
    total: {
        flex: 1,
        flexDirection: "row-reverse",
        alignSelf: "flex-end",
        padding: 15

        //   width:"100%",fontSize
    },
    title: {
        color: colors.green_color2,
        fontSize: 20,

    },
    priceNum: {
        color: colors.green_color,
        fontSize: 15,
    },
    currancy: {
        color: colors.currance,
        fontSize: 10,
    }
})
